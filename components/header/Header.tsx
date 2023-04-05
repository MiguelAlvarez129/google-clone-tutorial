import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from '../Avatar';
import HeaderOptions from './header_options/HeaderOptions';
import SearchBar from '../SearchBar';

function Header() {
 const router = useRouter();
 const ref = useRef<HTMLInputElement>(null)
  return (
    <header className='sticky top-0 bg-white'>
     <div className='flex w-full p-6 items-center'>
      <Image 
       alt="google's icon"
       src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
       height={40}
       width={120}
       className="cursor-pointer"
       onClick={() => router.push("/")} 
      />
      <SearchBar/>
      <Avatar url={'https://i.ytimg.com/vi/xb2QmD4oEZY/maxresdefault.jpg'}/>
     </div>
      {/* <form className='flex border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-lg max-w-3xl items-center'>
       <input type="text" ref={ref} className="flex-grow w-full focus:outline-none"/>
       <XMarkIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={() => ref.current.value = "" }/>
       <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
       <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
       <button hidden type="submit"> Search </button>
      </form> */}

      <HeaderOptions/>
    </header>
  )
}

export default Header