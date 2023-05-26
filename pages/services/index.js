
import React from 'react'
import Image from "next/image"
import { redirect } from '../LeftSide/LeftSide'

import { SiProducthunt } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandNextjs, TbServerCog } from 'react-icons/tb'
import { GiCampingTent, GiCampfire } from 'react-icons/gi'
import { MdOutlineShapeLine } from 'react-icons/md'

import { FcAndroidOs } from 'react-icons/fc'
import { MdOutlineWebStories } from 'react-icons/md'
import { DiPython, DiReact } from 'react-icons/di'
import Link from 'next/link'

export default function index() {
    return (

        <div className="grid grid-row-[.2fr_1fr_5fr] md:grid-row-[.2fr_1fr_1fr] w-full h-full bg-black" >
            <Link href={'/'} className="w-full h-50 justify-center flex flex-row bg-black ">
                <Image src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
            </Link>
            <div  className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer text-center">

                <p className='text-4xl font-semibold text-green-800 animate-pulse	'>Services We can make it </p>
            </div>
            <div className="w-full h-50 justify-center text-white flex flex-row flex-wrap text-white bg-black ">

               


                <div onClick={() => redirect("whats")} className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <FcAndroidOs size={100} ></FcAndroidOs>
                    <p>Android Applications</p>
                </div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <MdOutlineWebStories size={100} ></MdOutlineWebStories>
                    <p>Websites</p>
                </div>

                <Link href={'../courses/'} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <IoLogoJavascript size={100} ></IoLogoJavascript>
                    <p>Courses in programming</p></Link>

                <Link href={'../products/products'} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <SiProducthunt size={100} ></SiProducthunt>
                    <p>Products We made</p></Link>
              
            </div>













        </div>
    )
}
