import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function EconomyDetails() {
    const [economy,seteconomy] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/economy/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => seteconomy(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'economy'}/>

      <SinglePage image={economy.image} title={economy.title} description={economy.description}/>
      </>
  )
}

export default EconomyDetails