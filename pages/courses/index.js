
import React from 'react'
import Image from "next/image"
import { redirect } from '../LeftSide/LeftSide'

import { SiCreatereactapp, SiJavascript, SiExpress } from 'react-icons/si'
import { BsFiletypeHtml } from 'react-icons/bs'
import { TbBrandNextjs, TbServerCog } from 'react-icons/tb'
import { GiCampingTent, GiCampfire } from 'react-icons/gi'
import { MdOutlineShapeLine } from 'react-icons/md'

import { FaNodeJs } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiPython, DiReact } from 'react-icons/di'
import Link from 'next/link'
 
export default function index() {
    return (
      
        <div className="grid grid-row-[.2fr_1fr_5fr] md:grid-row-[.2fr_1fr_1fr] w-full h-full bg-black" >
            <Link href={'/'} className="w-full h-50 justify-center flex flex-row bg-black ">
                <Image  src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
            </Link>
            <div className="w-full h-50 justify-center text-white flex flex-row flex-wrap text-white bg-black ">



                <div onClick={() => redirect("whats")}  className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <DiPython size={100} ></DiPython>
                    <p>Basics Course</p>
                </div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <DiReact size={100} ></DiReact>
                    <p>react Js</p>
                    </div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
                    <BsFiletypeHtml size={100} ></BsFiletypeHtml>
                    <p>html</p></div>
                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <AiFillHtml5 size={100} ></AiFillHtml5>
                    <p>css</p></div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <SiCreatereactapp size={100} ></SiCreatereactapp>
                    <p>react native</p></div>
                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <SiJavascript size={100} ></SiJavascript>
                    <p>Javascript</p></div>
                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <SiExpress size={100} ></SiExpress>
                    <p>express Js</p></div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <FaNodeJs size={100} ></FaNodeJs>
                    <p>Node js</p></div>

                <div onClick={() => redirect("whats")}  className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <TbBrandNextjs size={100} ></TbBrandNextjs>
                    <p>Next Js</p></div>

                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <GiCampingTent size={100} ></GiCampingTent>
                    <p>Full-stack camp</p></div>
                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <MdOutlineShapeLine size={100} ></MdOutlineShapeLine>
                    <p>Frontend camp</p></div>
                <div onClick={() => redirect("whats")} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
                    <TbServerCog size={100} ></TbServerCog>
                    <p>Backend camp</p></div>

            </div>













        </div>
    )
}
