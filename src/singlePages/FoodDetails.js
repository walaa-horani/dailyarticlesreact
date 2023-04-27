import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function FoodDetails() {
    const [food,setfood] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/food/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setfood(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'food'}/>

      <SinglePage image={food.image} title={food.title} description={food.description}/>
      </>
  )
}

export default FoodDetails