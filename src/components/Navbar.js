import React,{useState} from 'react'
import useSizeProvider from '../tools/sizeProvider'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Navbar = ({setSearch}) => {
const [searchnav,setSearchnav] = useState('')
  const size = useSizeProvider()
  const [toggleSearchBar,setToggleSearchBar] = useState(false)
  const toggleSearch = ()=>{
    setToggleSearchBar(!toggleSearchBar)
  }
  
  const sendData = (data) =>{
    setSearch(data)
  }

  const handleClick =(e) =>{
    e.preventDefault()
  }
  const searchbar =  <form onClick={e=>handleClick(e)} className='text-center'>
                            <input onChange={e=>setSearchnav(e.target.value)} className=' w-[200px] h-[40px] text-xl text-black outline-none border border-1 border-gray-400 rounded-lg px-2 mr-5' type='text' placeholder='Search for products'/>
                            <button onClick={()=>sendData(searchnav)} className='bg-blue-500 h-[40px] pl-4 pr-4 rounded-lg '>Search</button>
                     </form>

  const searchIcon =<div className='flex flex-col items-center'>
    <div onClick={toggleSearch} className='w-[40px] h-[40px] rounded-full outline outline-1 outline-gray-400  flex items-center justify-center'><BsSearch/></div>

<div className={toggleSearchBar ? "absolute w-[250px] p-5 bg-gray-200 mt-11 rounded-lg bg-opacity-40 ":"hidden"}  >{searchbar}</div>
  </div>

  return (
    <div className='dark:bg-black dark:text-white bg-white h-[70px] flex justify-between px-5 items-center outline outline-b-1 outline-gray-200 dark:outline-gray-700 sticky top-0 z-10'>
      <div className='flex gap-5 items-center  '>
        <Link to='/'>
        <div onClick={()=>window.location.reload()} className='text-[20px] md:text-[30px] cursor-pointer '>Kumazon</div>
        </Link>
      </div>
     
        {
          size.width>600 ? ( searchbar ):( searchIcon )
        }
  
      
      <Link to='/cart'>
      <div className='cursor-pointer'>My Cart</div>
      
      </Link>
    </div>
  )
}

export default Navbar
