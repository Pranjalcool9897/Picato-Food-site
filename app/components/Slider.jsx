"use client"
import Image from "next/image"
import { useState , useEffect } from "react";

const Slider = () => {
    const data=[
        {id:1,
        title:"always hot always crispy" ,
        image:"/food1.jpg" 
        },
        {id:2,
        title:"we deliver food wherever you are in India",
        image:"/food2.jpg" 
        },
        {id:3,
        title:"The best pizza to share with your family",
        image:"/food3.jpg" 
        },
       
    ];
    const [curslide,setCurSlide]=useState(0);
    useEffect(() => {
      const Interval=setInterval(()=>{
        setCurSlide((prev)=>(prev===data.length-1?0:prev+1))
      },3000)
    return ()=>clearInterval(Interval);
     
    }, [])
    
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
      <div className='flex-1 flex items-center justify-center text-red-500 font-bold flex-col gap-4 '>
        <h1 className="text-5xl text-center uppercase md:p-10 md:text-6xl">{data[curslide].title}</h1>
        <button className=" border-2 border-slate-700 hover:bg-red-500 ease-in p-4 text-black">Order Now</button>
      </div>
      <div className='flex-1 relative w-full'>
        <Image src={data[curslide].image}fill />
      </div>
    </div>
  )
}

export default Slider
