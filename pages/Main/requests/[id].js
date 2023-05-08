import { useRouter } from 'next/router';
import React,{useEffect} from 'react'
import {MakeContineousCheckApi,MakeGetRequestByidApi,MakeshowProductsApi} from '../../api/schiema/MakeApiFunc';
const Checkpass=async(_id)=>{
    const passoword = await window.prompt("Please enter your password", "password");

    const res = await fetch(MakeContineousCheckApi(_id, passoword))
    const result = await res.json();
 
      if(result.result==='n' || passoword===''){
        window.location.href=`../../Main/${_id}`}else{
          return true;
        }
      
    }


export async function getServerSideProps(context){


   const { id } = context.query;

  const res=await fetch(MakeGetRequestByidApi(id))
  const data = await res.json()

  return{
    props:{
      FetchedData: data.length>0? data:[{requestservice:'no requests till now'}]
    }
  }

}
export default function requests({FetchedData}) {

  const router = useRouter();
  const id = router.query.id;
 
 
     useEffect(()=>{
  
      Checkpass(id);
  
     })
  



  return (
    <div className=" rounded-md w-full w-100 grid grid-rows-[1fr_1fr_1fr] bg-scroll ">
      
  

      <div id='firstcomponant' className="top-0	grid grid-rows-[1fr_1fr] bg-gray-600 text-white  bg-black flex-1  w-full ">
       
        <div className="flex flex-row  w-full bg-gray-600 text-white  bg-black flex-1  w-full ">
          <div className="border-r border-b  px-2 py-1  flex-1">
         
            <span className="text-sm">request  service</span>
    </div>
          <div className="  border-r border-b  px-2 py-1 flex-1">
            <span className="text-sm">clientid </span>
    </div>
          <div className=" border-r border-b  px-2 py-1  flex-1 ">
            <span className="text-sm">answer</span>
    </div>

          <div className="  border-r border-b  px-2 py-1  flex-1">
            <span className="text-sm">date</span>
    </div>
          <div className="  border-r border-b  px-2 py-1  flex-1">
            <span className="text-sm">cost</span>
          </div>
         
         
         
          <div className="  border-r border-b  px-2 py-1  flex-1">
            <span className="text-sm">profit</span>
          </div>
        </div>
       
       
        <div className="  border-r border-b flex-1 sticky w-full " onClick={(e) => {
          window.location.href = `../${id}`
        }}>
          <p for="account-type" className="shadow bg-blue-500 hover:bg-blue-400 cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  >back </p>
        </div>
       
     
       
        <div className="  border-r border-b flex-1 sticky w-full " onClick={(e) => {
          window.location.href = '#firstcomponant'
        }}>
          <p for="account-type" className="shadow bg-blue-500 hover:bg-blue-400 cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded fixed"  >go up </p>
        </div>

        
 
        
  </div>

<div className='w-100 h-100'>
       
      
{ 


 FetchedData.map((FetchedData_)=>(
   <div className="flex flex-row  w-full" key={Math.random()}>
    
     <div key={Math.random()}  className="border-r border-b border-gray-300 px-2 py-1  flex-1">
       <span key={Math.random()}  className="text-sm">{FetchedData_.requestservice}</span>
    </div>
     <div key={Math.random()}  className="  border-r border-b border-gray-300 px-2 py-1  flex-1">
       <span key={Math.random()}  className="text-sm">{FetchedData_.clientid}</span>
    </div>
     <div key={Math.random()}  className=" border-r border-b border-gray-300 px-2 py-1  flex-1 ">
       <span key={Math.random()}  className="text-sm">{FetchedData_.answer} & {FetchedData_.answercomment}</span>
    </div>
     <div key={Math.random()}  className="  border-r border-b border-gray-300 p-1  flex-1">
       <span key={Math.random()}  className="text-sm">{FetchedData_.requestdate}</span>
    </div>
     <div key={Math.random()}  className="  border-r border-b border-gray-300 p-1  flex-1">
       <span key={Math.random()}  className="text-sm">{FetchedData_.cost}</span>
     </div>
     <div key={Math.random()} className="  border-r border-b border-gray-300 p-1  flex-1">
       <span key={Math.random()}  className="text-sm">{FetchedData_.profit}%</span>
     </div>
    
  </div>


))



}

     
      </div>
    
</div>






       
     
   
      
         
      


  )
}
