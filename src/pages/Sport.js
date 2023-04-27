import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [spor, setSpor] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/spor/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setSpor(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'sport'}/>

      {spor.map(spor => {
        return (
       
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Link to={`/sport/${spor.id}`}>
        <Box 
        image={spor.image} title= {spor.title}/>
       </Link>
        </div>
   
        )
      })}
       </div>
    </div>
  )
}

export default Arts
