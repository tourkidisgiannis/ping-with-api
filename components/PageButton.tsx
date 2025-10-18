import Link from 'next/link'

interface PingPageButtonProps {
  link: string
  icon: React.ReactNode
  title: string
  className?: string // Add className as an optional prop
}

export default function PageButton({
  link,
  icon,
  title,
  className
}: PingPageButtonProps) {
  return (
    <Link href={link} passHref>
      <button
        className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-10 py-6 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-500 ${className}`}
      >
        <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-60 transition duration-300 group-hover:opacity-100'></span>
        <span className='relative z-10 flex w-full items-center justify-center space-x-2'>
          <span>{title}</span>
          <span>{icon}</span>
        </span>
      </button>
    </Link>
  )
}
