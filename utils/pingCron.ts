import cron from 'node-cron'
import fs from 'fs'
import path from 'path'
import { getPingResults } from '@/actions/ping'

// Set the log file path
const logFilePath = path.join(process.cwd(), 'ping_logs.txt')

// Function to append logs to the file
function appendLog(message: string) {
  const timestamp = new Date().toISOString()
  const logMessage = `${timestamp} - ${message}\n`

  // Append to log file
  fs.appendFile(logFilePath, logMessage, err => {
    if (err) {
      console.error('Failed to write to log file', err)
    } else {
      console.log('Log entry added')
    }
  })
}

console.log('Starting ping cron job...')

// Cron job to run every minute
cron.schedule('*/1 * * * *', async () => {
  console.log('Running scheduled ping check...')

  try {
    const results = await getPingResults()

    // Log the results to the file
    appendLog('Ping results: ' + JSON.stringify(results))
  } catch (error: unknown) {
    if (error instanceof Error) {
      appendLog('Error during ping check: ' + error.message)
    } else {
      appendLog('Unknown error during ping check')
    }
  }
})
