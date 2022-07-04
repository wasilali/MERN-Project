import React from 'react'
import {FaBars, FaTimes , FaHome,FaProductHunt} from 'react-icons/fa'
import {FcContacts,FcAbout} from 'react-icons/fc'
import { useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const navRef=useRef()
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  const {isAuthenticated,user}=useSelector(state=>state.user)

  return (
    <>
   <header>
    <h3 className='robo'>Ecommerce</h3>
     
     <nav ref={navRef}>
       <Link onClick={showNavbar} to="/"><FaHome/>Home</Link>
       <Link onClick={showNavbar} to="/products"><FaProductHunt/>Products</Link>
       <Link onClick={showNavbar} to="/contact"><FcContacts/>Contact</Link>
       <Link onClick={showNavbar} to="/about"><FcAbout/>About</Link>
       <button className='nav-btn nav-close-btn' onClick={showNavbar}>
         <FaTimes/>
       </button>
       {/*  */}
     <Link onClick={showNavbar} className='navSerch' to="/login">{isAuthenticated?<img style={{height:"30px",width:"30px",borderRadius:"50%"}} src={user.avatar ?  user.avatar.url : ""} alt="gfd" />:<IoMdContact/>}</Link>
     <Link onClick={showNavbar} className='navLogin' to="/search"><FaSearch/></Link>
     </nav>
     <button className='nav-btn' onClick={showNavbar}>
       <FaBars/>  
     </button>
   </header>
    </>
  )
}

export default Navbar