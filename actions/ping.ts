'use server'

import { exec } from 'child_process'
import { promisify } from 'util'
import { HOSTS } from '@/constants/hosts'

const execPromise = promisify(exec)

export async function getPingResults() {
  const replyFromLocale = 'Reply from'

  const pingPromises = HOSTS.map(async host => {
    try {
      console.log(`Starting Ping test to ${host}`)

      const { stdout } = await execPromise(`ping -n 1 -w 1000 ${host}`)
      let status = 'offline'
      let replyFromIndex = stdout.indexOf(replyFromLocale)

      if (
        replyFromIndex > 0 &&
        stdout.substring(replyFromIndex).toUpperCase().includes('BYTES')
      ) {
        status = 'online'
      }

      return { host, status, time: new Date().toISOString() }
    } catch (error) {
      return { host, status: 'offline', time: new Date().toISOString() }
    }
  })

  return await Promise.all(pingPromises)
}
