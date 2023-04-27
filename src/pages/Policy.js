import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [policy, setpolicy] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/policy/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setpolicy(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'policy'}/>

      {policy.map(policy => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/policy/${policy.id}`}>
        <Box image={policy.image} title= {policy.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
