import '@/styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
 
 <div className='flex flex-row w-full h-screen'>
      <Head >
        <title>Robotik official website</title>
        <meta name="description" content="Robotik is a leading technology company offering comprehensive Android and website development services. We combine cutting-edge programming techniques with creative design to deliver user-friendly and visually stunning applications. In addition, we specialize in creating high-fidelity clinical simulation models that provide realistic training experiences for healthcare professionals. With our expertise in software development and healthcare simulation, we empower organizations to embrace innovative solutions and enhance their digital presence. Partner with Robotik for customized Android apps, professional websites, and state-of-the-art clinical simulations tailored to meet your unique needs.Remember to adapt and customize the description according to your company's specific strengths, target audience, and unique selling points. Additionally, it's essential to conduct thorough keyword research to optimize your website's visibility in search engine results related to your services." />
      </Head>
  <Component {...pageProps} />
 
  </div>
  )
}
