import React, { useState } from 'react'
import { MakeshowProductsApi } from '../api/schiema/MakeApiFunc'
import Link from 'next/link'




export async function getServerSideProps(context) {
  const res =  await fetch(MakeshowProductsApi())
  const data = await res.json()

  return {
    props: {
      ProductFetchedData: data
    }
  }

}
export default function index({ ProductFetchedData }) {
  const [selected, setselected] = useState('pharmaclone')



  return (
    <div className="   flex flex-col  md:flex-row w-full h-full ">
      <div className='bg-black  text-white cursor-pointer h-full text-center flex-flex-row '>

        {ProductFetchedData.map((data) => (
          <div key={Math.random()} className='text-center flex flex-row hover:text-green-700 justify-center '>
        
            <p key={Math.random()}  className='mt-5  inline' onClick={() => { setselected(data.ProductName) }}>{data.ProductName}</p>
          </div>
        ))}
        <div className='text-center flex flex-row hover:text-green-700 justify-center '>
     
          <p className='mt-5  inline' onClick={() => { window.location.href='/' }}>Back</p>
        </div>
      </div>

      <div className='bg-white   h-full'>
        <div className="container  mx-auto text-center">

        



            {


              ProductFetchedData.map((FetchedData) => {

                if (FetchedData.ProductName === selected) {
                  return (
                
                    <div key={Math.random()}  className="w-full border-2 border-black ">
                      <h2 key={Math.random()}  className="text-xl font-bold mb-2 bg-black text-white mt-5 ">{FetchedData.ProductName}</h2>
                      <p key={Math.random()}  className=" text-sm mb-4 ">{FetchedData.Description}</p>
                      <div key={Math.random()} className="flex justify-between items-center">
                        <p key={Math.random()}  className="text-lg font-bold m-3">Price:{FetchedData.price}$</p>
                        <Link key={Math.random()} href={`http://${FetchedData.Link}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Download</Link>
                        </div>
                      
                 
</div>
                  )
                }

              })



            }
            








        </div>
      </div>

    </div>

  )
}
