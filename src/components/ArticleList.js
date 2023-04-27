import React from 'react'
import Container from './Container'
import { slideImages } from '../data/LatestArticles'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {BsArrowRight} from 'react-icons/bs'
import Box from './Box';
import BoxFlex from './BoxFlex';
import BoxColumn from './BoxColumn';
import {Link} from 'react-router-dom'
import Meta from '../components/Meta'

const spanStyle = {
  padding: '20px',
  background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 4%, rgba(0,0,0,0.7) 100%, rgba(10,0,0,0.9) 100%)',
  color: 'white',
  position:'absolute',
  bottom:'0',
  width:'100%',
  height:'100px',
  textAlign:'center',
  margin:'auto',
  
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  objectFit:'cover',
  width:'100%',
  position:'relative'
}

  

function ArticleList(props) {
 

  return (
    
    <>
     <Meta title = {'articles'}/>
   <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <h4 style={spanStyle}>{slideImage.caption}</h4>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      
    <div className='row mt-5 '>
       
    
          <div className='col-lg-8 col-md-8'>
          <div className='heading'>
              <h4>world</h4>
     </div>
         <div className='row'>
         { props.articles && props.articles.slice(0, 9).map(articles => {
      return   (
        < >
          <div className='col-lg-4 col-md-6 col-sm-12 '>
           <Link to={`world/${articles.id}`}>
            <Box title = {articles.title} image = {articles.image} category={articles.category} />
            </Link>
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
            </div>
            </div>
           
    
     <div className='col-lg-4 col-md-4 col-sm-12'>
     <div className='heading'>
              <h4>breaking news</h4>
     </div>
     <div className='row align-items-center'>

   
     { props.breakingNews && props.breakingNews.map(breakingNews => {
      return   (
        < >
          <div className='small-box '>
            <Link to={`/breakingNews/${breakingNews.id}`}>
            <BoxFlex title = {breakingNews.title} image = {breakingNews.image} category={breakingNews.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
     
       
               </div>

</div>
</div>
<div className='row mt-5'>
<div className='heading '>
              <h4>spor</h4>
     </div>
{ props.spor && props.spor.slice(0, 3).map(spor => {
      return   (
        < >
          <div className='col-md-4 mt-3'>
          <Link to={`/sport/${spor.id}`}>
            <Box title = {spor.title} image = {spor.image} category={spor.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
              </div>
              <div className='button-see'>
              <button><Link to={'/sport'}>see all  <BsArrowRight/></Link></button>
              </div>

              <div className='row'>
<div className='heading '>
              <h4>economy</h4>
     </div>
{ props.economy && props.economy.slice(0, 3).map(economy => {
      return   (
        < >
          <div className='col-md-4 mt-3'>
            <Link to={`/economy/${economy.id}`}>
            <Box title = {economy.title} image = {economy.image} category={economy.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
              </div>
              <div className='button-see'>
              <button><Link to={'/economy'}>see all  <BsArrowRight/></Link></button>
              </div>

           
           
              <div className='row'>
<div className='heading '>
              <h4>arts</h4>
     </div>
{ props.arts && props.arts.slice(0, 3).map(arts => {
      return   (
        < >
          <div className='col-md-4 mt-3'>
          <Link to={`/arts/${arts.id}`}>
            <Box title = {arts.title} image = {arts.image} category={arts.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
              </div>
              <div className='button-see'>
              <button><Link to={'/arts'}>see all  <BsArrowRight/></Link></button>
              </div>
   


              <div className='row'>
<div className='heading '>
              <h4>policy</h4>
     </div>
{ props.policy && props.policy.slice(0, 3).map(policy => {
      return   (
        < >
          <div className='col-md-4 mt-3'>
          <Link to={`/policy/${policy.id}`}>
            <Box title = {policy.title} image = {policy.image} category={policy.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
              </div>
              <div className='button-see'>
              <button><Link to={'/policy'}>see all  <BsArrowRight/></Link></button>
              </div>



      <div className='row mt-3'>

     <div className='col-md-8'>
     <div className='heading '>
              <h4>tourism</h4>
     </div>
      <div className='row '>
      {props.tourism && props.tourism.slice(0, 2).map(tourism => {
      return   (
        < >
          <div className='col-md-12  tourism mt-3'>
          <Link to={`/tourism/${tourism.id}`}>
            <Box title = {tourism.title} image = {tourism.image} category={tourism.category} /></Link>
           
            
        
            
         
              </div>
              
              </>
               )  
     
     
              })}
                <div className='button-see button-tour'>
              <button><Link to={'/tourism'}>see all  <BsArrowRight/></Link></button>
              </div>
      </div>
     </div>
     
     <div className='col-md-4'>
     
      <div className='row'>
      <div className='heading '>
              <h4>food</h4>
     </div>
      { props.food && props.food.slice(0, 4).map(food => {
      return   (
        < >
          <div className='small-box '>
          <Link to={`/food/${food.id}`}>
            <BoxFlex title = {food.title} image = {food.image} category={food.category} /></Link>
           
            
        
            
         
              </div>
              </>
               )  
     
     
              })}
               <div className='button-see button-tour '>
              <button><Link to={'/food'}>see all  <BsArrowRight/></Link></button>
              </div>
      </div>


     </div>

     </div>
    
<div className='row mt-5'>

   
    { props.food && props.policy.slice(0, 1).map(policy => {
      return   (
        < >
        <div className='col-md-5 image-big '>
        <div className='heading '>
              <h4>policy</h4>
     </div>
           <Link to={`/policy/${policy.id}`}>
        <Box title = {policy.title} image = {policy.image} category={policy.category} /></Link>
        
            
         
        <div className='button-see '>
              <button><Link to={'/policy'}>see all  <BsArrowRight/></Link></button>
              </div>
              </div>

              
              </>
               )  
     
     
              })}
                
 <div className='col-md-3 '>
 <div className='heading '>
              <h4>bussines</h4>
     </div>
               { props.Bussines && props.Bussines.slice(0, 2).map(Bussines => {
      return   (
        < >
       
          <div className='row small-img'>
          <Link to={`/bussines/${Bussines.id}`}>
          <Box title = {Bussines.title} image = {Bussines.image}  />
          </Link>
    </div>
       
           
            
        
            
         
             
            

              
              </>
               )  
     
     
              })}
              <div className='button-see  button-tour'>
              <button><Link to={'/bussines'}>see all  <BsArrowRight/></Link></button>
              </div>
 </div>
 <div className='col-md-3 '>
 <div className='heading '>
              <h4>Most read</h4>
     </div>
{ props.MostRead && props.MostRead.slice(0, 3).map(MostRead => {
      return   (
        < >
       
         <div className='row list'>
        <div key={MostRead.id} className=''>
         
        
        <ul>
        <Link to={`/mostRead/${MostRead.id}`}>
          <li className='mb-5'> {MostRead.title}</li>
          </Link>
                  </ul>

        </div>
        </div>
            
        
            
         
             
           

              
              </>
               )  
     
     
              })}
   
   </div>

   <div className='col-md-12 life'>
   <div className='heading '>
              <h4>life style</h4>
     </div>
   { props.LifeStyle && props.LifeStyle.slice(0, 1).map(LifeStyles => {
      return   (
        < >
       
       
        <div key={LifeStyles.id} className='lifestyle'>
         
        <Link to={`/lifeStyle/${LifeStyles.id}`}>
       <Box image={LifeStyles.image} title={LifeStyles.title} category={LifeStyles.category}/></Link>
        </div>
        <div className='button-see '>
              <button><Link to={'/lifestyle'}>see all  <BsArrowRight/></Link></button>
              </div>
            
        
            
         
             
           

              
              </>
               )  
     
     
              })}
   </div>
</div>
   
          
    </>
  )
  
}

export default ArticleList