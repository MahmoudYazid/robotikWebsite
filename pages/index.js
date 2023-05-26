import Image from "next/image"

import React, { useEffect ,useState} from 'react'
import { GrProductHunt } from 'react-icons/gr'
import { AiOutlineContacts, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { FcServices } from 'react-icons/fc'
import { FiBookOpen } from 'react-icons/fi'
import Link from "next/link"

export default function Home() {
 


  return (
    <div className="grid grid-row-[.2fr_1fr_5fr] md:grid-row-[.2fr_1fr_1fr] w-full h-full bg-black" >
      <div className="w-full h-50 justify-center flex flex-row bg-black ">
        <Image src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
      </div>
      <div className="w-full h-50 justify-center text-white flex flex-row text-white bg-black ">

       

        <Link href='../contact/contact' className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer">
          <AiOutlineContacts size={50} ></AiOutlineContacts>
          <p>contact</p>
        </Link>

        <Link href='../products/products' className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer">
          <GrProductHunt size={50} ></GrProductHunt>
          <p>products</p></Link>

        <Link href='../courses/' className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer">
          <FiBookOpen size={50} ></FiBookOpen>
          <p>Courses</p></Link>
        <Link href='../services/' className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer">
          <FcServices size={50} ></FcServices>
          <p>services</p></Link>
        
      </div>


    




    

      


      
    </div>
  )
}
