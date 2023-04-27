import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function BussinesDetails() {
    const [bussines,setBussines] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/Bussines/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setBussines(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
     <Meta title = {'bussines'}/>
      <SinglePage image={bussines.image} title={bussines.title} description={bussines.description}/>
      </>
  )
}

export default BussinesDetails