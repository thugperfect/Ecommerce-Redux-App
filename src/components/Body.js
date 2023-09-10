import React from 'react'
import Sidebar from './Sidebar'

function Body() {
  return (
    <div className='flex container h-full bg-black'>
        <div className='w-1/5 text-center'>
        <Sidebar/>
        </div>
        <div className='w-4/5 text-center'>
         Body

        </div>
      
    </div>
  )
}

export default Body
