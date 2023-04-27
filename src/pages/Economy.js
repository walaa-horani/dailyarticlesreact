import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [economy, seteconomy] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/economy/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => seteconomy(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'economy'}/>
      {economy.map(economy => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/economy/${economy.id}`}>
        <Box image={economy.image} title= {economy.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
