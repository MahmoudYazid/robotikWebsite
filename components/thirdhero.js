import React from 'react'

export default function hero() {
  return (
      <section className='lg:pl-[15%] lg:pr-[15%] bg-[#000437] w-[100%] h-[100%] grid grid-rows-[1fr_1fr]  lg:grid-cols-[1fr_1fr]'>
          <div className='gap-5 grid grid-rows-[1fr_1fr_.5fr] '>
        <div className=' pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-5xl justify-center lg:justify-start items-center flex font-[600]  '>Why choosing us is worth it ?</div>
        <div className='pl-[5%] pr-[5%] lg:pl-[0%] lg:pr-[0%] text-center lg:text-start text-white text-3xl justify-center lg:justify-start items-start flex font-[300]  '><p>This is one of the biggest growing and proven platform to gave a try on technology so do miss it.</p></div>

              
            <div className=' flex justify-center lg:justify-start items-center gap-4'>
          <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Read Docs

          </button>

             
            </div>
        </div>
        
        
        
        <div className='flex justify-center lg:justify-end items-center'> <img src='/hero3.svg'></img></div>

      </section>

  )
}
