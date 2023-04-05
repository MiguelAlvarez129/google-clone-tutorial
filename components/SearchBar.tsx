import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

function SearchBar() {
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)

  const search = (e : React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const value = ref.current.value

   if (!value) return;

   router.push(`/search?term=${value}`)
  }

  return router.pathname == "/search" ? (
		   <form className='flex flex-grow border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-lg max-w-3xl items-center' onSubmit={search}>
       <input type="text" ref={ref} className="flex-grow w-full focus:outline-none" />
       <XMarkIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={() => ref.current.value = "" }/>
       <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
       <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
       <button hidden type="submit"> Search </button>
      </form>
  ) : (
		 <form className="flex flex-col items-center flex-grow w-4/5" onSubmit={search}>
        {/* <SearchBar/> */}
        <div className='flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <MagnifyingGlassIcon className='mr-3 h-5 text-gray-500' />
          <input type="text" className='focus:outline-none flex-grow' ref={ref} />
          <MicrophoneIcon className='h-5 text-gray-500'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-9 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' type="submit" >Google Search</button>

          <button className='btn'> I'm feeling lucky</button>
        </div>
      </form>
	)
}

export default SearchBar