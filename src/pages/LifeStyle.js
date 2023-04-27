import React from 'react'
import Box from '../components/Box'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [LifeStyle, setLifeStyle] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/LifeStyle/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setLifeStyle(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'life style'}/>
      {LifeStyle.map(LifeStyle => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/LifeStyle/${LifeStyle.id}`}>
        <Box image={LifeStyle.image} title= {LifeStyle.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
