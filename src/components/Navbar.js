import React from 'react'
import useSizeProvider from '../tools/sizeProvider'
import { BsSearch } from "react-icons/bs";
const Navbar = () => {

  const size = useSizeProvider()

  const searchbar =  <div ><input className=' w-[200px] h-[40px] text-xl text-black outline-none border border-1 border-gray-400 rounded-lg px-2 mr-5' type='text' placeholder='Search for products'/>
                            <button className='bg-blue-500 h-[40px] pl-4 pr-4 rounded-lg '>Search</button>
                     </div>

  const searchIcon = <div className='w-[40px] h-[40px] rounded-full outline outline-1 outline-gray-400 flex items-center justify-center'><BsSearch/></div>

  return (
    <div className='dark:bg-black dark:text-white bg-white h-[70px] flex justify-between px-5 items-center'>
      <div className='flex gap-5 items-center  '>
        <div className='text-[20px] md:text-[30px] cursor-pointer '>Kumazon</div>
      </div>
     
        {
          size.width>600 ? ( searchbar ):( searchIcon )
        }
  
      
      <div className='cursor-pointer'>My Cart</div>
    </div>
  )
}

export default Navbar
