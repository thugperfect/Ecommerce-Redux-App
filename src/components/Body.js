import React from 'react'
import Sidebar from './Sidebar'
import ItemCard from '../tools/ItemCard'

function Body() {
  return (
    <div className='flex  h-full bg-white  dark:bg-zinc-900 text-zinc-900 dark:text-gray-200'>
        <div className='container w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 '>

         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         <ItemCard/>
         


        </div>
      
    </div>
  )
}

export default Body
