import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div>
  <section class="text-gray-600 body-font text-justify">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class=" relative rounded-lg h-64 overflow-hidden">
          <Image alt="content" class=" object-cover object-center h-full w-full" src="/temporary/p1.jpg" fill/>
        </div>
        <h2 class="title-font text-3xl md:text-5xl font-medium text-gray-900 mt-6 mb-3">BURGERS</h2>
        <p class="leading-relaxed text-base">Burgers are known for their satisfying and hearty nature. The combination of a juicy patty, soft bun,and various textures from toppings creates a fulfilling and satiating eating experience.</p>
        <Link href='/Menu/burger'><button class="flex mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded">Show More</button></Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class=" relative rounded-lg h-64 overflow-hidden">
          <Image alt="content" class="object-cover object-center h-full w-full" src="/temporary/pizza.jpg" fill/>
        </div>
        <h2 class="title-font text-2xl md:text-5xl font-medium text-gray-900 mt-6 mb-3">PIZZA</h2>
        <p class="leading-relaxed text-base">PICATO occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <Link href='/Menu/pizza'><button class="flex mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded">Show More</button></Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Menu
