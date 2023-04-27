import React from 'react'
import Box from '../components/Box'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Arts() {
  const [breaking, setbreaking] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/BreakingNews/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setbreaking(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
       
      <div className='row'>
      {breaking.map(breaking => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/breaking/${breaking.id}`}>
        <Box image={breaking.image} title= {breaking.title} />
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
