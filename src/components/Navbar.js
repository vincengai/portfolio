import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

// 50 minutes
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button type='button' className='toggle-btn'>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
