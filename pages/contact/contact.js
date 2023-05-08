import React from 'react'
import { redirect } from '../LeftSide/LeftSide'
import Image from 'next/image'
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { MdWhatsapp } from 'react-icons/md'
import { BsPhoneVibrate, BsBackspace } from 'react-icons/bs'
import Link from 'next/link';
import { RiGooglePlayFill } from 'react-icons/ri';

export default function contact() {
  return (
    <div className="grid grid-row-[.2fr_1fr] md:grid-row-[.2fr_1fr] w-full h-full bg-black">
      <div className="w-full h-30 justify-center flex flex-row bg-white cursor-pointer ">
        <Image src={'/logo.png'} width={'500'} height={'500'} className="self-end"></Image>

     </div>
      <div className="w-full h-50 justify-center text-white flex flex-row text-white flex-wrap cursor-pointer ">
        <Link href='/' className="flex flex-col m-5 hover:text-green-600  ">
          <BsBackspace size={50}></BsBackspace>
          <p>Back</p>
        </Link>



        <div
          className="flex flex-col m-5 hover:text-green-600 cursor-pointer"
          onClick={() => redirect("facebook")}
        >
          <AiOutlineFacebook size={50}></AiOutlineFacebook>
          <p>facebook</p>
        </div>
        <div
          className="flex flex-col m-5 hover:text-green-600 cursor-pointer"
          onClick={() => redirect("youtube")}
        >
          <AiOutlineYoutube size={55}></AiOutlineYoutube>
          <p>Youtube</p>
        </div>
        <div
          className="flex flex-col m-5 hover:text-green-600  cursor-pointer"
          onClick={() => redirect("whats")}
        >
          <MdWhatsapp size={55}></MdWhatsapp>
          Whats-App
        </div>
        <div className="flex flex-col m-5 hover:text-green-600 cursor-pointer ">
          <BsPhoneVibrate size={50}> </BsPhoneVibrate>
          <a href="tel:00201005648558">Phone</a>
        </div>

        <div className="flex flex-col m-5 hover:text-green-600 cursor-pointer " onClick={() => redirect("googleplay")}>
          <RiGooglePlayFill size={50}> </RiGooglePlayFill>
          <p>Google play</p>
        </div>
      </div>

  
        
     
      </div>

  )
}
