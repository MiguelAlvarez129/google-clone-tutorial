import Head from 'next/head'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import {ViewfinderCircleIcon} from '@heroicons/react/20/solid' 
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className='flex w-full justify-between p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
        <ViewfinderCircleIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

        <Avatar url={'https://i.ytimg.com/vi/xb2QmD4oEZY/maxresdefault.jpg'}/>
        </div>
      </header>
      {/* Body */}
      <div className="flex flex-col items-center flex-grow w-full">

        <Image
          src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
          alt="google logo"
          width={300}
          height={100}
        />
        <SearchBar/>
      </div>
      <Footer/>
    </div>
  )
}
