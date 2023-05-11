import React, { useEffect ,useState} from 'react'
import { useRouter } from 'next/router'
import { MakeCheckExistanceApi, MakeGetTypeApi, MakeshowProductsApi } from '../api/schiema/MakeApiFunc';

import Link from 'next/link';
import Image from 'next/image';
import { IoGitPullRequestSharp } from 'react-icons/io5';
import { GoSignOut } from "react-icons/go";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbAffiliate } from "react-icons/tb";

export async function getServerSideProps(context){


   const { id } = context.query;

  const req = await fetch(MakeCheckExistanceApi(id))
  const result = await req.json()
  const reqGetType = await fetch(MakeGetTypeApi(id))
  const resultreqGetType = await reqGetType.json()
  const reqGetProducts = await fetch(MakeshowProductsApi())
  const resGetProducts = await reqGetProducts.json()
  return{
    props:{
      checkdata:result,
      type:resultreqGetType,
      products:resGetProducts
    }
  }

}






export default function id({checkdata,type,products}) {
  const [Agreebatchvisibility, setAgreebatchvisibility] = useState('invisible')
    const router=useRouter();
    const id = router.query.id;
    useEffect(() => {
        if(checkdata.result==="n"){
    
      router.push('../404');
    }
    
  }, []);

   
  return (
    <div className="grid grid-rows-[.2fr_1fr] md:grid-rows-[.2fr_1fr] w-full h-full bg-white" >
      <div className="w-full justify-center flex flex-row bg-black ">
        <Image src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
      </div>
      <div className='bg-white flex flex-row flex-wrap justify-center text-black'>
        <div className='flex flex-row   '>
         
          <Link href={'/'} className='m-3  h-10 cursor-pointer h-10  hover:text-green-700' > 
            <GoSignOut size={50}></GoSignOut>
          <p>sign out</p>
          </Link>

          <Link href={`/Main/requests/${id}`} className='m-3 h-10 cursor-pointer  hover:text-green-700'>
            <IoGitPullRequestSharp size={50}></IoGitPullRequestSharp>
            <p>Requests</p></Link>

    
    </div>
    
   </div>

    </div>
  )
}
