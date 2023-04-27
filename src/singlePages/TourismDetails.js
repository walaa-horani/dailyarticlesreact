import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function TourismDetails() {
    const [tourism,settourism] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/Tourism/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => settourism(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
    <Meta title = {'tourism'}/>
      <SinglePage image={tourism.image} title={tourism.title} description={tourism.description}/>
      </>
  )
}

export default TourismDetails