import React from 'react'

function Forcast({ title }) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>
          {title}
        </p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src='sun.png' alt='' className='w-12 my-1' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src='sun.png' alt='' className='w-12 my-1' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src='sun.png' alt='' className='w-12 my-1' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src='sun.png' alt='' className='w-12 my-1' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src='sun.png' alt='' className='w-12 my-1' />
          <p className='font-medium'>22°</p>
        </div>
      </div>
    </div>
  )
}

export default Forcast;