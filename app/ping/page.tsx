'use client'

import { getPingResults } from '@/actions/ping'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface PingResult {
  host: string
  status: string
  time: string
}

export default function PingPage() {
  const [results, setResults] = useState<PingResult[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPingResults()
      setResults(data)
    }

    fetchData() // Run immediately when the page loads
    const interval = setInterval(fetchData, 60000) // Refresh every 60 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <div className='space-y-2 p-6'>
      <Link href='/' className='rounded-md  bg-blue-300 p-3 underline'>
        Back
      </Link>
      <h1 className='mb-4 text-xl font-bold'>Ping Results</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {results.map(({ host, status, time }) => (
          <div
            key={host}
            className={`rounded-xl p-4 text-white shadow-md ${
              status === 'online' ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
          >
            <h2 className='text-lg font-semibold'>{host}</h2>
            <p className='text-sm'>
              Status: <span className='font-bold'>{status.toUpperCase()}</span>
            </p>
            <p className='text-xs'>
              Checked at: {new Date(time).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
