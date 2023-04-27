import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <div key={props.id} className='article-box'>
                <img  src={props.image} className='img-fluid'/>
                <span className='text-muted'> {props.category}</span>
                </div>
                <div className='box-text'>
                <a className=' '> {props.title}</a>
                </div>
                
               
              
    </div>
  )
}

export default Box