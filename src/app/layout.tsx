import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'delowar-portfolio',
  description: 'Designed by delowar',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-bodyColor'>{children}</body>
    </html>
  )
}
