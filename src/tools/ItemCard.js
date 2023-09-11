import React from 'react'

const ItemCard = () => {
  return (
    <div className='w-[150px] h-[200px] lg:w-[200px] lg:h-[300px] bg-white outline outline-1 outline-zinc-400 rounded-lg'>
        <img src="" alt="" className='bg-green-500 w-full h-[120px] lg:h-[200px] rounded-t-lg' />
        <div className='font-bold text-md'>Title</div>
        <div className='text-xs'>this is a of two lines long so just fill updescription...</div>
        <div className='flex justify-center'>
        <div className='bg-blue-500 w-[100px] text-sm lg:text-lg rounded-sm flex justify-center text-white cursor-pointer '>Add to Cart</div>

        </div>
    </div>
  )
}

export default ItemCard
