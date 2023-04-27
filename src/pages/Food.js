import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'

function Arts() {
  const [food, setfood] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/food/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setfood(resp))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div>
      <div className='row'>
      <Meta title = {'food'}/>

      {food.map(food => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Link to={`/food/${food.id}`}>
        <Box image={food.image} title= {food.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
