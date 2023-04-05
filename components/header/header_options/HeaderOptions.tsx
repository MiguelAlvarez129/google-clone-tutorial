import React from 'react'
import { MagnifyingGlassIcon, PhotoIcon, PlayIcon, NewspaperIcon, MapIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import HeaderItems from './header_items/HeaderItems'
function HeaderOptions() {

  const options = [
    {name: "All", Icon: MagnifyingGlassIcon, selected: true},
    {name: "Images", Icon: PhotoIcon, selected: false},
    {name: "Videos", Icon: PlayIcon, selected: false},
    {name: "News", Icon: NewspaperIcon, selected: false},
    {name: "Maps", Icon: MapIcon, selected: false},
    {name: "More", Icon: EllipsisVerticalIcon, selected: false},
  ]
  return (
    <div className='flex justify-evenly w-full text-gray-700 text-sm lg:text-vase lg:justify-start space-x-36 lg:pl-52 border-b'>
      <div className='flex space-x-6'>
        { options.map((option, index) => <HeaderItems {...option} key={index} /> )}
      </div>
      <div className='flex space-x-2'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions