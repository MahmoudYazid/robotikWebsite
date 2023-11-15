import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";

export default function navbar() {
  const [SideBar, SetSideBar]=useState('hidden');
  const SideBarVisibilityFunc=()=>{
    SideBar == 'hidden' ? SetSideBar('flex') : SetSideBar('hidden')
  }
  return (
    <>
      <section className=' pl-[3%] pr-[3%] lg:pl-[15%] lg:pr-[15%] bg-[#000437] w-[100%] h-[100%] flex flex-row items-center justify-start'>

        <img src='/logowithoubackgroundsvg.svg' className='w-[8rem] h-[8rem] 	'></img>
      <div className='flex flex-row gap-3 ml-auto'>

        
       
          <a href='#pastwork'
            class="lg:flex hidden text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
          past work
        </a>
          <a href='#service'
            class="lg:flex hidden text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
          our service
        </a>
        <a href='#contact'
            class="lg:flex hidden text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
        >
Contact
        </a>

          <CiMenuFries onClick={()=>SideBarVisibilityFunc()} size={30} className='text-white flex lg:hidden' />

      </div>

    </section>


      <section id='sidebar' className={`${SideBar} lg:hidden flex flex-col justify-center items-center h-screen absolute w-[40%]  bg-[#000437]`}>
        <div className='flex flex-col  gap-3 '>


          <a href='#pastwork'
            class=" text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            past work
          </a>
          <a href='#service'
            class=" text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            our service
          </a>
          <a href='#contact'
            class=" text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            Contact
          </a>

          <button
          onClick={()=>SideBarVisibilityFunc()}
            class=" text-white relative px-8 py-2 rounded-md  isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            close
          </button>

        </div>

</section>
    </>

  )
}
