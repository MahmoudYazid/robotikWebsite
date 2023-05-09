import { MakeAddRequestApi } from '@/pages/api/schiema/MakeApiFunc'
import { useRouter } from 'next/router'
import React,{useState} from 'react'
  
export default function id() {
  const [CardId,setCardId]=useState('')
  const [batchvisibility,setbatchvisibility]=useState('invisible')
  const [Agreebatchvisibility,setAgreebatchvisibility]=useState('invisible')
  const router=useRouter();

  const AddAffiliateReq=async()=>{
   
    const id = router.query.id;
    const req= await fetch(MakeAddRequestApi('365','not existed',`${id}`,'convert to Affiliate','0',`${CardId}`,'0'))
    const res = req.json().then((response)=>{
      console.log(response.results)
    if(response.results==='n'){
       setAgreebatchvisibility('invisible')
           setbatchvisibility('visible')
       
    }
    if(response.results==='ok'){
       setbatchvisibility('invisible')
         setAgreebatchvisibility('visible')
         
         }
    });

  }
const BatchComponent=()=>{
    return(
      <div className={`bg-red-100 border border-red-500 text-red-500 px-4 py-3 rounded relative ${batchvisibility}`} role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">You made this request before please wait until the answer come or contact with us </span>
  
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

  return (
    <div className='grid flex-row md:grid-cols-[.2fr_1fr] bg-black w-full h-full'>
    <div className='flex flex-col justify-center text-center w-100 h-100 bg-black'>


        <img src='/without_any_thing.png' className='h-100 w-100 block' ></img>
      </div>
      <form className="w-50  border-2 border-green-700 justify-center text-center flex flex-col  bg-white ">



        <div className="md:flex md:items-center mb-6 item-center justify-center">
   
          <div className="md:w-2/3">
      <input onChange={(e)=>{
        setCardId(e.target.value);
            }} placeholder='You National Card Id' type="text" id="password" name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
  </div>
  
        <div className='flex flex-row item-center justify-center '>
          <div className="w-50 m-5  flex flex-row item-center justify-center  text-center cursor-pointer " >
            <p onClick={() => { AddAffiliateReq() }} for="account-type" className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ">Enter</p>
    </div>
          <div className="w-50 m-5  flex flex-row item-center justify-center  text-center cursor-pointer" onClick={(e) => {
            window.location.href = `../${router.query.id}`
          }}>
            <p for="account-type" className="h-full shadow bg-blue-500 hover:bg-blue-400 cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  >back </p>
          </div>
    </div>
    <BatchComponent></BatchComponent>
    <AgreeBatchComponent></AgreeBatchComponent>
       </form>
       </div>
  )
}
