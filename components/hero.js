import React from 'react'

export default function hero() {
  return (
      <section className='lg:pl-[15%] lg:pr-[15%] bg-[#000437] w-[100%] h-[100%] grid grid-rows-[1fr_1fr]  lg:grid-cols-[1fr_1fr]'>
          <div className='gap-5 grid grid-rows-[1fr_1fr_.5fr] '>
        <div className=' pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-5xl justify-center lg:justify-start items-center flex font-[600]  '><p>Providing  <span className='text-[#8D86FF]'>Technology</span> on Hands</p></div>
        <div className='pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-3xl justify-center lg:justify-start items-start flex font-[600]  '><p>Give the handy tasks to our hand and with no worries. Serving millions around the world right at the moment.</p></div>

              
            <div className=' flex justify-center lg:justify-start items-center gap-4'>
                  <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
                      <span class="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">Contact Now</span>
                      <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                      <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                  </button>
             
            </div>
        </div>
        
        
        
        <div className='flex justify-center lg:justify-end items-center'> <img src='/heroSvg.svg'></img></div>

      </section>

  )
}
