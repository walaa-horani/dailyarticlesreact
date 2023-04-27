import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [Bussines, setBussines] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/Bussines/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setBussines(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'bussines'}/>

      {Bussines.map(Bussines => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link  to={`/Bussines/${Bussines.id}`}>
        <Box image={Bussines.image} title= {Bussines.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
