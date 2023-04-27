import React from 'react'

function SinglePage(props) {
  return (
    <div className='single-page'>
    <div className='col-md-12'>
    <h3 className='text-center'>{props.title}</h3>
   
    </div>
    <div className='col-lg-8 col-md-12  m-auto'>
    <img className='img-fluid' src={props.image}/>
    <p>{props.description}</p>
    </div>
    </div>
  )
}

export default SinglePage