import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

export default function contactBar() {
  return (
      <div className='bg-[#000437] w-[100%] h-[100%] flex justify-center items-center '>
          <div className=' flex flex-wrap justify-center items-center w-[90%] gap-5 '>
            <SiWhatsapp size={50} className='text-green-500' />
              <FaFacebookSquare size={50} className='text-blue-500' ></FaFacebookSquare>
        </div>
      
    </div>
  )
}
