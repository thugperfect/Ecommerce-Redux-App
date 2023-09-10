import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <div className=''>
     <Navbar/>
     <Outlet/>     
    </div>
  )
}

export default Header
