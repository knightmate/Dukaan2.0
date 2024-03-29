import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dukaan2.0',
  description: 'Create the Dukaan....',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body  id='root_body' className={inter.className}>
         {children}
        </body>
      
      
      
    </html>
  )
}
