import React from 'react'

const TopButtons = () => {

  const cities = [
    {
      id: 1,
      title: "Mumbai"
    },
    {
      id: 2,
      title: "Delhi"
    },
    {
      id: 3,
      title: "New York"
    },
    {
      id: 4,
      title: "London"
    },
    {
      id: 5,
      title: "Sydney"
    },

  ]

  return (
    <div className='flex items-center justify-around my-6 font-medium'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>

      ))}

    </div>
  )
}

export default TopButtons;