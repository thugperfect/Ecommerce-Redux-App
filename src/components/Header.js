import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Header({setSearch}) {

  return (
    <div className=''>
     <Navbar setSearch={setSearch}/>
     <Outlet/>     
    </div>
  )
}

export default Header
