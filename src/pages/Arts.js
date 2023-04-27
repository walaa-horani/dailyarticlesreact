import React from 'react'
import Box from '../components/Box'
import ArticleList from '../components/ArticleList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'
function Arts() {
  const [arts, setarts] = useState([])

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/arts/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setarts(resp))
    .catch(error => console.log(error))
  }, []) 
  
  return(
    <div>
       <Meta title = {'arts'}/>
      <div className='row'>
      {arts.map(art => {
        return (
          
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Link to={`/arts/${art.id}`}>
        <Box image={art.image} title= {art.title}/>
        </Link>
        </div>
       
        )
      })}
       </div>
    </div>
  )
}

export default Arts
