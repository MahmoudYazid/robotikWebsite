import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
 
 <div className='flex flex-row w-full h-screen'>
   
  <Component {...pageProps} />
 
  </div>
  )
}
