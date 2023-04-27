import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [World, setWorld] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/World/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setWorld(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'World'}/>

      {World.map(World => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link  to={`/world/${World.id}`}>
        <Box image={World.image} title= {World.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
