import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function PolicyDetails() {
    const [policy,setPolicy] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/policy/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setPolicy(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
     <Meta title = {'policy'}/>
      <SinglePage image={policy.image} title={policy.title} description={policy.description}/>
      </>
  )
}

export default PolicyDetails