import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';


export default function NavBar_Comp() {
    const router = useRouter();
    const id = router.query.id;

    if (!id) {return(
  <div className='flex flex-row w-full h-22 text-center item-center justify-center   bg-black' >
  
        <Link href='../products/products' className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold pl-3 pr-3 rounded'>
        <p  className='text-center'>products</p>
        </Link>
        <Link  href='../Signin/signin' className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p >Login</p>
        </Link>
        <Link href='../signup/signup' className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p >SignUp</p>
        </Link>
        <Link href='../contact/contact' className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p >Contact</p>
        </Link>
      
    </div>
    )}
        if (id) {return(
  <div className='flex flex-row w-100 h-10 text-center item-center justify-center bg-white'>
        <Link  href={`/Main/finance/${id}`} className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p >Finacne</p>
        </Link>
        <Link href='/products/products' className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p >logout</p>
        </Link>
       
       <Link href={`/Main/requests/${id}`} className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p>Requests</p>
        </Link>
         <Link href={`/Main/requests/${id}`} className='m-1 cursor-pointer  hover:bg-blue-600 text-black font-bold  rounded pl-3 pr-3'>
        <p>main page</p>
        </Link>
        <a onClick={async()=>{
         
         window.location.href=`/Main/ConvertAcountToAff/${id}`;
         

            
           
        }} className='m-1 cursor-pointer h-fit bg-green-600 hover:bg-black hover:text-white text-black font-bold  rounded pl-3 pr-3'>
        <p>Convert TO Affiliate Id </p>
        </a>
    </div>
    )}
    
    }


