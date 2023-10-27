import React from 'react'
import Image from 'next/image'
const Featured = () => {
  const fooddata=[
    {id:1,
     title:"Burger",
     desc:"Burgers are known for their satisfying and hearty nature. The combination of a juicy patty, soft bun,and various textures from toppings creates a fulfilling and satiating eating experience.",
     price:123,
     image:"/temporary/p1.jpg"
    },
    {id:2,
     title:"Pancake",
     desc:"Pancakes are comfort food that can bring a sense of warmth and nostalgia. Their fluffy texture and delicious taste make them a cozy and satisfying meal.",
     price:222,
     image:"/temporary/p2.jpg"
    },
    {id:3,
     title:"Egg",
     desc:"Eggs are rich in choline, a nutrient important for brain health and cognitive function. Choline plays a role in memory, mood regulation, and even fetal brain development during pregnancy.",
     price:123,
     image:"/temporary/p3.jpg"
    },
    {id:4,
     title:"Cake",
     desc:"Cakes come in an extensive range of flavors, from classic vanilla and chocolate to more unique options like red velvet, lemon, carrot, and beyond.",
     price:131,
     image:"/temporary/p4.jpg"
    },
    {id:5,
     title:"Veg-Roll",
     desc:"Vegetable rolls are typically light and refreshing, making them a satisfying choice for a balanced meal or snack, especially during warmer months.",
     price:321,
     image:"/temporary/p5.jpg"
    },
  ]
  return (
    <div className=' mt-12 w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex' >
        {/* SINGLE_ITEM */}
        {fooddata.map(item=>(
        <div key={item.id}className='w-screen h-[60vh] flex flex-col items-center gap-4 justify-around md:w-[50vw] xl:w-[33vw]'>
        <div className='relative flex-1 w-full'>
          <Image src={item.image} alt='ok' fill className='object-contain'/>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-center justify-around text-center'>
          <h1 className='uppercase font-bold text-xl md:text-2xl xl:text-3xl'>{item.title}</h1>
          <p className='p-4'>{item.desc}</p>
          <span className='text-xl font-bold '>₹{item.price}</span>
          <button className='bg-red-500 rounded-md p-2 text-white'>Add to Cart</button>
        </div>
        </div>))}
      </div>
    </div>
  )
}

export default Featured
