import React from 'react'

function Cart({data,price}) {
  return (
    <div className='container mx-auto w-4/5 min-h-[80vh] bg-white dark:bg-zinc-900 dark:text-gray-50 flex flex-col justify-between'>
      <div className=''>
      {
      data?.length>0
      ? data.map(k=>(
        <div className='w-full bg-zinc-800 mt-5 mb-5  h-[100px] '>
          x
        </div>
      )):""
     }
      </div>
   
<div className='w-full flex justify-end'>
{
  price? <div className='text-4xl'>Total : {price}</div>:""
}
    
</div>
    </div>
  )
}

export default Cart
