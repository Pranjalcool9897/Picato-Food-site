"use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link';

 

const category = ({params}) => {
  const [data1,setdata1]=useState([]);
  const [data2,setdata2]=useState([]);
  useEffect(async () => {
    
    const datab=await fetch("/burger.json");
    const datap=await fetch("/pizza.json");
    const res=await datab.json();
    const res1=await datap.json();
    setdata1(res);
    setdata2(res1);
  
}, [])
    
  return (
    <div>
    { params.category === "burger"?(

    <div className='flex flex-wrap text-red-500'>
       {data1.map(item=>{
        return <Link className='w-full flex flex-col p-2 items-center justify-center h-[60vh] border-r-2 sm:w-1/2 lg:w-1/3 border-red-500 border-b-2' href={`/product/${item.id}`}>
         <div className='relative h-[80%] overflow-hidden'>
          <img src={item.images[0].sm} alt="xx" className='object-contain' />
         </div>
         <div className='md:text-xl text-center'>
          <p className='text-red-900'>{item.name} ${item.price}</p><br/>
          {item.desc}
         </div>
         <button className='bg-red-400 hover:bg-red-500 rounded py-2 text-white px-2'>Add to cart</button>
         
        </Link>
       })}
    </div>):(
      <div className='flex flex-wrap text-red-500'>
      {data2.map(item=>{
       return <Link className='w-full flex flex-col p-2 items-center justify-center h-[60vh] border-r-2 sm:w-1/2 lg:w-1/3 border-red-500 border-b-2' href={`/product/${item.id}`}>
       <div className='relative h-[80%] overflow-hidden'>
        <img src={item.img} alt="xx" className='object-contain' />
       </div>
       <div className='md:text-xl text-center'>
        <p className='text-red-900'>{item.name} ${item.price}</p><br/>
        {item.description}
       </div>
       <button className='bg-red-400 hover:bg-red-500 rounded py-2 text-white px-2'>Add to cart</button>
       
      </Link>
      })}
   </div>
    )}</div>
  )
}

export default category
