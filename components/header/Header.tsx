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
      <HeaderOptions/>
    </header>
  )
}

export default Header