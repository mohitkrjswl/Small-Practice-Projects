import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { TbLocationPin } from "react-icons/tb";


const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6 '>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          placeholder='Search for location'
          className='text-xl text-gray-700 font-monod p-2 w-full shadow-xl focus:outline-none capitalize rounded-md placeholder:lowercase'
        />
        <UilSearch size={30} className=" text-white cursor-pointer hover:scale-125 duration-200 transition ease-out" />
        <TbLocationPin size={30} className=" text-white cursor-pointer hover:scale-125 duration-200 transition ease-out" />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-semibold' >°C</button>
        <p className='text-xl text-white mx-2'>|</p>
        <button name='metric' className='text-xl text-white font-semibold'>°F</button>

      </div>
    </div>
  )
}

export default Inputs;