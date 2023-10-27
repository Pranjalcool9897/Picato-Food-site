import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between bg-red-500 text-white border-2 p-4 md:h-24 md:p-20 h-12 items-center'>
      <Link href='/'>PICATO</Link>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer
