import React from 'react'

function Form(props) {
  return (
    <>
        
        {props.article ? (

            <div className='mb-2'>
            <label>title</label>
            <input placeholder='title' className='form-control'/>
            <label>description</label>
            <textarea placeholder='description' className='form-control' rows='6'/>
            
            </div>
    
            
        ):null}
    </>
  )
}

export default Form