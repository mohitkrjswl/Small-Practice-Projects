import React from 'react'
import { IoPartlySunnyOutline } from "react-icons/io5";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from '@iconscout/react-unicons'

function TempAndDetail() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Clear Sky</p>
      </div>

      <div className='flex items-center justify-between flex-row text-white py-3'>
        <img src='sun (1).png' alt='' className='w-20' />
        <p className='text-6xl'>43°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center py-1'>
            <UilTemperature size={20} className='mr-1' />
            Real fell :
            <span className='ml-2 font-medium text-base'>43°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center py-1'>
            <UilTear size={20} className='mr-1' />
            Humidity :
            <span className='ml-2 font-medium text-base'>43%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={20} className='mr-1' />
            Wind :
            <span className='ml-2 font-medium text-base'>3 km/h</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>Rise: <span className='font-medium ml-1'>06:30 AM</span></p>
        <p className='font-light'>|</p>
        <IoPartlySunnyOutline size={20} />
        <p className='font-light'>Set: <span className='font-medium ml-1'>05:45 PM</span></p>
        <p className='font-light'>|</p>
        <UilArrowUp />
        <p className='font-light'>High: <span className='font-medium ml-1'>06:30 AM</span></p>
        <p className='font-light'>|</p>
        <UilArrowDown />
        <p className='font-light'>Low: <span className='font-medium ml-1'>06:30 AM</span></p>
      </div>
    </div>
  )
}

export default TempAndDetail;