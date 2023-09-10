import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-[70px] flex justify-between px-5 items-center'>
      <div className='flex gap-5 items-center bg-slate-600'>
        <div className='text-[30px] cursor-pointer'>Kumazon</div>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>Products</div>

      </div>
      <div >
        <input className='h-[40px] text-xl text-black outline-none rounded-lg px-2 mr-5' type='text' placeholder='Search for products'/>
        <button className='bg-blue-500 h-[40px] pl-4 pr-4 rounded-lg '>Search</button>
      </div>
      <div>Cart</div>
    </div>
  )
}

export default Navbar
