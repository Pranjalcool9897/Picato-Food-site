import Image from 'next/image'
import React from 'react'
import { singleProduct } from '@/public/data';
import Price from '@/app/components/Price';
const Singleproduct = ({params}) => {
 return(
    <div className='p-4 lg:px-20 xl:px-40 flex h-screen flex-col gap-6 justify-around items-center text-red-500 md:flex-row'>
      {/* IMAGE CONTAINER */}
      <div className='w-max h-max'>
        <img src={singleProduct.images[0].sm} alt="xxs" className='object-contain'/>
      </div>
      {/* TEXT CONTAINER */}
      <div className=' flex flex-col gap-3 mx-4'>
        <h1 className='text-bold md:text-3xl'>{singleProduct.name}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id}/>
      </div>
    </div>
  )
  }
export default Singleproduct; 
