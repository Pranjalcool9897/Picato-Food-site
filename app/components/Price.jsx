'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
const Price = ({ price, id }) => {
    const[total,setTotal]=useState(price);
    const[quantity,setQuantity]=useState(1);
    const[option,setOption]=useState(0);

    const onOptionChange=(e)=>{
        setOption(e.target.value);
    }
    useEffect(() => {
        if(option==0){
        setTotal(quantity*(price));
    }
        else if(option==1){
            setTotal(quantity*(price+6));
        }
        else{
            setTotal(quantity*(price+8));
        }

      
    }, [option,quantity])
    
    return (
        <div>
            <h1 className='text-bold md:text-2xl'>${total.toFixed(2)}</h1>
            <div className='flex gap-2 md:text-2xl  my-4 '>
                <input type='radio' name='option' value={0} id='small' onChange={onOptionChange} />
                <label htmlFor='small'> Small </label>      
                <input type='radio' name='option' value={1} id='medium' onChange={onOptionChange} />
                <label htmlFor='medium'> Medium </label>      
                <input type='radio' name='option' value={2} id='large' onChange={onOptionChange} />
                <label htmlFor='large'> Medium </label>      
              </div>
            <div className='flex flex-col items-center justify-between md:flex-row sm:gap-2 md:gap-0'>
                <div className='flex justify-between md:text-5xl items-center border-2 border-red-400 p-2 w-full '>
                    <span>Quantity</span>
                    <div className='flex gap-2'>
                        <button onClick={()=>setQuantity(prev=>(prev>1?prev-1:1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={()=>setQuantity(prev=>(prev<10?prev+1:10))}>{'>'}</button>
                    </div>
                </div>
                <Link href='/Cart'><button className='uppercase  bg-red-500 text-white  p-2 ring-1 ring-red-500'>Add to cart</button></Link>
            </div>
        </div>
    )
}

export default Price