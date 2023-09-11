import React from 'react'

const ItemCard = ({data}) => {

  
  return (
data?
    <div  className='w-[150px] h-[300px] lg:w-[200px] dark:bg-black lg:h-[350px] bg-white outline outline-1 outline-zinc-300  dark:outline-zinc-700 rounded-lg flex flex-col justify-between pb-2'>
        <img src={data.thumbnail} alt="" className='w-full h-[120px] lg:h-[200px] rounded-t-lg' />
        <div className='font-bold text-md px-2'>{data.title}</div>
        <div className='text-xs px-2'>{data.description?.length >60 ? <div>{data.description.slice(0,60)}...</div>:<div>{data.description}</div>}</div>
        <div className='flex justify-center'>
        <div className='bg-blue-500 w-[100px] text-sm lg:text-lg rounded-sm flex justify-center text-white cursor-pointer '>Add to Cart</div>

        </div>
    </div>
  :<div className='w-[150px] h-[300px] lg:w-[200px] dark:bg-black lg:h-[350px] bg-white outline outline-1 outline-zinc-300  dark:outline-zinc-700 rounded-lg flex flex-col justify-between pb-2'>
  <div  className='w-full animate-pulse  bg-slate-200   h-[120px] lg:h-[200px] rounded-t-lg' ></div>
  <div className='font-bold animate-pulse text-md ml-2 bg-slate-200 w-[120px] h-[20px] rounded-xl'></div>
  <div className='text-xs ml-2 animate-pulse  bg-slate-200 w-[180px] h-[20px] rounded-xl'></div>
  <div className='text-xs ml-2 animate-pulse  bg-slate-200 w-[180px] h-[20px] rounded-xl'></div>
  <div className='flex justify-center'>
  <div className='bg-blue-500 w-[100px] text-sm lg:text-lg rounded-sm flex justify-center text-white cursor-pointer '></div>

  </div>
  </div>
  )
}

export default ItemCard
