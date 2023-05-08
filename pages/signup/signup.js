import React,{useState} from 'react'
import { MakeLoginApi, MakeSignUpApi } from '../api/schiema/MakeApiFunc'
import { useRouter } from 'next/router';

export default function signup() {
  const router = useRouter();
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [phone,setphone]=useState('')
  const [name_,setname_]=useState('')
  const [batchvisibility,setbatchvisibility]=useState('invisible')
  const [Agreebatchvisibility,setAgreebatchvisibility]=useState('invisible')
  const BatchComponent=()=>{
    return(
      <div className={`bg-red-100 border border-red-500 text-red-500 px-4 py-3 rounded relative ${batchvisibility}`} role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">Your email or phone are existed before details are incorrect.</span>
  
</div>
    )
  }

    const AgreeBatchComponent=()=>{
    return(
      <div className={`bg-green-700 border border-green text-white px-4 py-3 rounded relative ${Agreebatchvisibility}`} role="alert">
        <strong className="font-bold">Success!</strong>
  
  
</div>
    )
  }

  const FetchData=async()=>{
    await fetch(MakeSignUpApi(phone,email,name_,password)).then((response)=>{
      response.json().then((data)=>{
         if(data.result==='n'){
        setbatchvisibility('visible')
         setAgreebatchvisibility('invisible')
         }else{
          setAgreebatchvisibility('visible')
           setbatchvisibility('invisible')
         }
      })
    })
    
  
}
  return (

    <div className='grid flex-row md:grid-cols-[.2fr_1fr] bg-black w-full h-full'>
   <div className='flex flex-col justify-center text-center w-100 h-100 bg-black'>


        <img src='/without_any_thing.png' className='h-100 w-100 block' ></img>
      </div>
      <form className="w-50  border-2 border-green-700 justify-center text-center flex flex-col  bg-white ">
        <div className="md:flex md:items-center mb-6 item-center justify-center">
          <div className="md:w-2/3">
      <input placeholder='name' onChange={(e)=>{
        setname_(e.target.value);
            }} type="text" id="name" name="name" className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
 </div>
        <div className="md:flex md:items-center mb-6 item-center justify-center">
    
          <div className="md:w-2/3">
      <input onChange={(e)=>{
        setemail(e.target.value);
            }} placeholder='email' type="email" id="email" name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
  </div>
        <div className="md:flex md:items-center mb-6 item-center justify-center">
   
          <div className="md:w-2/3">
      <input onChange={(e)=>{
        setphone(e.target.value);
            }} placeholder='phone' type="text" id="phone" name="phone" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
  </div>
        <div className="md:flex md:items-center mb-6 item-center justify-center">
   
          <div className="md:w-2/3">
      <input onChange={(e)=>{
        setpassword(e.target.value);
            }} placeholder='password' type="text" id="password" name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
  </div>
  

        <div className='flex flex-row item-center justify-center '>
          <div className="w-50 m-5  flex flex-row item-center justify-center  text-center cursor-pointer " >
            <p onClick={() => { FetchData() }} for="account-type" className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ">Enter</p>
    </div>
          <div className="w-50 m-5  flex flex-row item-center justify-center  text-center cursor-pointer">
            <p for="account-type" className="shadow bg-red-500 hover:bg-white hover:text-black cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded " onClick={() => { window.location.href='/' }}>Main</p>
        </div>
        </div>


    <BatchComponent></BatchComponent>
    <AgreeBatchComponent></AgreeBatchComponent>
       </form>
       
     
    </div>













  )
}
