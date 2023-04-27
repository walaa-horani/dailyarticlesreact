import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [tourism, settourism] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/Tourism/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => settourism(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'tourism'}/>

      {tourism.map(tourism => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/tourism/${tourism.id}`}>
        <Box image={tourism.image} title= {tourism.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
