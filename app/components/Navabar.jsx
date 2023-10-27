import React from 'react'
import Menu from '../components/menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
const Navabar = () => {
  const user=false
  return (
    <div className=' flex font-medium justify-between h-12 p-4 items-center border-b-2 border-b-red-500 uppercase'>
      <div className='hidden md:flex gap-4'>
        <Link href='/'>HOME</Link>
        <Link href='/Menu'>MENU</Link>
        <Link href='/'>CONTACT</Link>
      </div>
      <nav className='text-xl text-red-500 font-bold'>
        <Link href='/'>Picato</Link>
      </nav>

      <div className='md:hidden'><Menu/></div>
      <div className=' md:flex hidden gap-5'>
      {!user?<Link href='/Login'>Login</Link>:
      <Link href='/Order'>Order</Link>}
      <CartIcon/>
      </div>
    </div>
  )
}

export default Navabar
