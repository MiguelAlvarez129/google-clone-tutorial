import Image from 'next/image'
import React from 'react'

const Avatar = (props : {url : string}) => {
  return (
   <Image
   className='h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ml-auto'
   src={props.url} 
   alt="profile pic"
   loading="lazy"
   />
  )
}

export default Avatar