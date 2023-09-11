import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Header({setSearch}) {
  const handleSearch = (prop)=>{
    setSearch(prop)
  }
  return (
    <div className=''>
     <Navbar setSearch={handleSearch}/>
     <Outlet/>     
    </div>
  )
}

export default Header
