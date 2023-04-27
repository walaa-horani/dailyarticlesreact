import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
           <div className='logo'>
    <Link to='/'>daily articles</Link> 
    </div>
    <div className='footer-links'>
      <div className='link'>
        <Link to={'/sport'}>spor</Link>
      </div>

      <div className='link'>
        <Link to={'/policy'}>policy</Link>
      </div>

      <div className='link'>
        <Link to={'/tourism'}>tourism</Link>
      </div>

      <div className='link'>
        <Link to={'/bussines'}>bussines</Link>
      </div>

      <div className='link'>
        <Link to={'/mostRead'}>most read</Link>
      </div>

      <div className='link'>
        <Link to={'/world'}>world</Link>
      </div>

      <div className='link'>
        <Link to={'/food'}>food</Link>
      </div>
      <div className='link'>
        <Link to={'/arts'}>arts</Link>
      </div>
    </div>
    
    </footer>
  )
}

export default Footer