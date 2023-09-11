import React from 'react'
import { AiFillStar } from "react-icons/ai";

function Cart({data,price}) {
  return (
    <div className='container mx-auto w-4/5 min-h-[80vh] bg-white dark:bg-zinc-900 dark:text-gray-50 flex flex-col justify-between'>
      <div className=''>
      {
      data?.length>0
      ? data.map(k=>(
        <div className='w-full dark:bg-zinc-800 mt-3 mb-3  h-[150px] outline outline-1 outline-gray-300 dark:outline-gray-800 rounded-lg flex items-center justify-between'>
          <img src={k.thumbnail} alt="product-image" className='w-[150px] h-[150px] rounded-l-lg'></img>
          <div className=' ml-5'>
            <div className='font-bold text-lg'>{k.title}</div>
            <div className='w-[300px]'>{k.description}</div>
          </div>
           <div className='flex'><AiFillStar className='color'/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          <div className='text-2xl'>Price: {k.price} $</div>
        
        </div>
      )):<div className='w-full min-h-[40vh] flex justify-center items-center text-2xl'>Nothing in Cart</div>
     }
      </div>
   
<div className='w-full flex justify-end'>
{
  price? <div className='text-4xl'>Total : {price} $</div>:""
}
    
</div>
    </div>
  )
}

export default Cart
