import Head from 'next/head'
import Image from 'next/image'

import pineapplePizza from '../public/160630-hawaiianpizza-editorial.jpg'

export default function Home() {
  return(
  <div className="w-screen h-screen bg-purple-400 flex flex-col justify-center items-center">
  <Head>
    <title>Pizza App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <h1 className="mb-6 text-4xl text-white font-bold">Yummy Pineapple Pizza</h1>
  <Image src={pineapplePizza} width={250} height={250} className='rounded-lg'/>
  <button className='mb-6 mt-6 px-6 py-2 bg-purple-700 text-white shadow-sm'
    onClick={() => alert('We will deliver in ${Math.random()} seconds')} 
  >Order Now!</button>

  </div>
  )
}