import React from 'react'
import Box from '../components/Box'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [mostRead, setmostRead] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/MostRead/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setmostRead(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'most Read'}/>

      {mostRead.map(mostRead => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/mostRead/${mostRead.id}`}>
        <Box image={mostRead.image} title= {mostRead.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
