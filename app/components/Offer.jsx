import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row text-white gap-4 mt-4 '>
      <div className='flex-1 flex flex-col items-center gap-8 justify-center'>
        <h1 className='text-xl md:text-2xl xl:text-5xl text-center'>Dellicious Burger & French Fries</h1>
        <p>Get the best offers at Picato. and get exiting offers at very low cost.</p>
        <button className='p-2 rounded-md bg-red-500 w-40'>Get-Offer</button>
      </div>
      <div className='relative flex-1 p-2 '>
        <Image src="/temporary/offer.png" fill className='object-contain p-2'/>
      </div>
    </div>
  )
}

export default Offer
