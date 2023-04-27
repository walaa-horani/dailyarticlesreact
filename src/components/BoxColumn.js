import React from 'react'

const BoxColumn = (props) => {
  return (
    <div className='box-column'>
        <div className='box-column-content'>
        <img className='img-fluid' src={props.image}/>
        <a>{props.title}</a>
        </div>

    </div>
  )
}

export default BoxColumn