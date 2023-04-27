import React from 'react'

const BoxFlex = (props) => {
  return (
  <>

        <div className='col-lg-4 col-md-12 '>
           
          
               
                <img  className='img-fluid food-img' src={props.image}/>
              
           
           
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 food-title'>
           
          
         
          
           <span className=''>{props.title}</span>
      
      
   </div>
        

        </> 
  )
}

export default BoxFlex