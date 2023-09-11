import React from 'react'

const ItemCard = ({data}) => {
  return (

    <div  className='w-[150px] h-[200px] lg:w-[200px] dark:bg-black lg:h-[350px] bg-white outline outline-1 outline-zinc-300  dark:outline-zinc-700 rounded-lg flex flex-col justify-between pb-2'>
        <img src="" alt="" className='w-full h-[120px] lg:h-[200px] rounded-t-lg' />
        <div className='font-bold text-md px-2'>{data.title}</div>
        <div className='text-xs px-2'>{data.description}</div>
        <div className='flex justify-center'>
        <div className='bg-blue-500 w-[100px] text-sm lg:text-lg rounded-sm flex justify-center text-white cursor-pointer '>Add to Cart</div>

        </div>
    </div>
  )
}

export default ItemCard
