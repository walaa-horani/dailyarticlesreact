import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function EconomyDetails() {
    const [world,setworld] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/World/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setworld(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'world'}/>

      <SinglePage image={world.image} title={world.title} description={world.description}/>
      </>
  )
}

export default EconomyDetails