import React from 'react'

function Cart({data}) {
  return (
    <div className='container mx-auto w-4/5 bg-white dark:bg-zinc-900 dark:text-gray-50'>
     {
      data?.length>0
      ? data.map(k=>(
        <div className='w-full bg-zinc-800 mt-5 mb-5  h-[100px] '>cwdkjbdsvkj</div>
      )):""
     }
    </div>
  )
}

export default Cart
