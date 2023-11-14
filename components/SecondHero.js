import React from 'react'

export default function Secondhero() {
  return (
    <section className='lg:pl-[10%] lg:pr-[10%] bg-[#000437] w-[100%] h-[100%] grid grid-rows-[1fr_1fr]  lg:grid-cols-[1fr_1fr]'>

      <div className='lg:order-1 order-2   flex justify-center lg:justify-start items-center'> <img src='/hero 2.svg'></img></div>

      <div className='lg:order-2 order-1 gap-5 grid grid-rows-[1fr_1fr_.5fr] '>
        <div className=' pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-5xl justify-center lg:justify-start items-center flex font-[600]  '><p>Free Enroll For First 1000 users </p></div>
        <div className='pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-3xl justify-center lg:justify-start items-start flex font-[300]  '><p>Give the handy tasks to our hand and with no worries. Serving millions around the world right at the moment.</p></div>


        <div className=' flex justify-center lg:justify-start items-center gap-4'>
          <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            View Pricing

          </button>


        </div>
      </div>




    </section>

  )
}
