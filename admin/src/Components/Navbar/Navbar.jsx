/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import adminpannel from '../../assets/adminpannel.png'
import p1 from '../../assets/p1.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={adminpannel} alt="" className="nav-logo" />
      <img src={p1} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
