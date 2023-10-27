import './globals.css'
import { Inter } from 'next/font/google'
import Navabar from './components/Navabar'
import Footer from './components/Footer'
import Notification from './components/Notification'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification/>
        <Navabar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
