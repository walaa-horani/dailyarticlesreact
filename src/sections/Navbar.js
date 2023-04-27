import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {AiOutlineBars} from 'react-icons/ai'
const Navbar = () => {
  const [showMenu,setshowMenu] = useState(false)
  let menu
  if(showMenu){

   
    menu =
    <div className='navbar-icons-mobile-contain'>
    
   
    <div className='navbar-icons-mobile'>
      
        <ul>
        <li><Link to='/sport'> sport  </Link> </li>
            <li>  <Link to='/economy'>  economy </Link> </li>
            <li> <Link to='/policy'>  policy </Link>   </li>
            <li> <Link to='/bussines'>  bussines </Link>   </li>
            <li>  <Link to='/tourism'> tourism  </Link>  </li>
            <li> <Link to='/food'>  food </Link>   </li>
            <li> <Link to='/arts'>  arts </Link>   </li>
        </ul>
       
    </div>
    </div>
  }
  return (
    <div>

  {menu}
    
    <div className='navbar-articles'>
      <div className='nav-icon'>
      <AiOutlineBars icon={AiOutlineBars} onClick={() =>setshowMenu(!showMenu)} />
      </div>
      <div className='logo2 text-white'>
    <Link className='text-white' to='/'>daily articles</Link> 
    </div>
    <div className='logo'>
    <Link to='/'>daily articles</Link> 
    </div>
    <div className='navbar-icons'>
        <ul>
        <li><Link to='/sport'> sport  </Link> </li>
            <li>  <Link to='/economy'>  economy </Link> </li>
            <li> <Link to='/policy'>  policy </Link>   </li>
            <li> <Link to='/bussines'>  bussines </Link>   </li>
            <li>  <Link to='/tourism'> tourism  </Link>  </li>
            <li> <Link to='/food'>  food </Link>   </li>
            <li> <Link to='/arts'>  arts </Link>   </li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar