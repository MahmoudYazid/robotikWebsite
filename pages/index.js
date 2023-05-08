import Image from "next/image"

import React, { useEffect ,useState} from 'react'
import { GrProductHunt } from 'react-icons/gr'
import { AiOutlineContacts, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { GoSignIn } from 'react-icons/go'
import { HiOutlineUserAdd } from 'react-icons/hi'
import Link from "next/link"

export default function Home() {
  const [slidingpage, Setslidingpage] = useState(0);

  const [sliding,setsliding]=useState([
    ['/2953cb04-bf8d-4a97-84bd-1b4c4fca1f21.jpg','Welcome to our programming company, where we specialize in robotics software solutions. We offer custom programming and pre-built programs to fit your needs. Contact us today to learn more.'],
    ['/3faa06a0-5f42-4c83-bc9a-edce4916236c.jpg', 'We specialize in creating highly realistic clinical simulation models for healthcare professionals to practice and improve their skills. Our models simulate a variety of medical conditions and procedures and can be customized to meet the unique needs of our clients. Contact us to learn more about how our models can enhance your training programs.'],
    ['/5dc8fccc-14a5-4814-bb0c-afd3e56cafa5.jpg', 'At our company, we specialize in developing custom software programs to meet the unique needs of our clients. We work closely with you to understand your specific requirements and create tailored solutions that help you streamline your operations, improve efficiency, and reduce costs. Our team of experienced developers uses the latest technologies and programming languages to build high-quality software thats reliable, secure, and easy to use.Whether you need a desktop application, a web - based system, or a mobile app, we can create a custom program that meets your exact specifications.Contact us today to learn more about our services and how we can help you achieve your business goals.'],
    
    
  ])
  
  const incSldiding=()=>{
    slidingpage === 2 ? Setslidingpage(0) : Setslidingpage(slidingpage +1) ;

    
  }


  return (
    <div className="grid grid-row-[.2fr_1fr_5fr] md:grid-row-[.2fr_1fr_1fr] w-full h-full bg-black" >
      <div className="w-full h-50 justify-center flex flex-row bg-black ">
        <Image src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
      </div>
      <div className="w-full h-50 justify-center text-white flex flex-row text-white bg-black ">

        <Link href='../Signin/signin' className="flex flex-col m-5 hover:text-green-600 cursor-pointer ">
          <GoSignIn size={50}></GoSignIn>
          <p>login</p>
        </Link>


        <Link href='../signup/signup' className="flex flex-col m-5  hover:text-green-600 h-20 cursor-pointer">
          <HiOutlineUserAdd size={50}></HiOutlineUserAdd>
          <p>signup</p>
        </Link>


        <Link href='../contact/contact' className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer">
          <AiOutlineContacts size={50} ></AiOutlineContacts>
          <p>contact</p>
        </Link>

        <Link href='../products/products' className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer">
          <GrProductHunt size={50} ></GrProductHunt>
          <p>products</p></Link>
      </div>


      <div className="bg-white w-full flex flex-col md:flex-row text-center justify-center">
        <div className=" mt-10  bg-white   h-100 grid grid-row-[.5fr_.5fr] md:grid-cols-[.3fr_.5fr]   item-center justify-center text-center">
        
        <div className="bg-black h-full w-100">
            <img src={sliding[slidingpage][0]} className="w-100 h-50 animate-pulse	"></img>
        </div>

          <div className="bg-black w-100 h-100  text-center flex flex-col justify-center text-white">
            <p className="m-5 text-lg	  h-50  text-white font-bold">{sliding[slidingpage][1]}</p>
            <div className=" bg-black h-full w-100 text-center  align-center flex flex-row justify-center text-white ">
              <AiOutlineArrowRight size={50} className="text-white hover:text-green-700" onClick={() => {
                incSldiding();
              }}></AiOutlineArrowRight>
            </div>
            
            </div>
            
      </div>
       
      </div>





    

      


      
    </div>
  )
}
