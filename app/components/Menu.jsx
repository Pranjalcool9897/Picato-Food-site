"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'
const menu = () => {
    const links=[
        {id:1,title:"HOME",url:"/"},
        {id:1,title:"MENU",url:"/Menu"},
        {id:1,title:"WORKING HOURS",url:"/"},
        {id:1,title:"CONTACT",url:"/"},

    ]
    const [open,Setopen]=useState(false);
    const user=false;
  return (
    <div className='cursor-pointer'>
      {!open?(<Image src='/open.png' alt='' width={20} height={20} onClick={()=>Setopen(true)}/>):
      (<Image src='/close.png' alt='' width={20} height={20} onClick={()=>Setopen(false)}/>)}
       {
       open && (<div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center gap-8 z-10'>
        {links.map(item=>(
            <Link href={item.url} key={item.id} onClick={()=>Setopen(false)}>{item.title} </Link>
        ))}
        {!user?<Link href='/Login' onClick={()=>Setopen(false)}>Login</Link>:<Link href='/Order' onClick={()=>Setopen(false)}>Orders</Link>}
        <Link href='/Cart'onClick={()=>Setopen(false)}><CartIcon/></Link>
        
      </div>)
      }
    </div>
  )
}

export default menu
