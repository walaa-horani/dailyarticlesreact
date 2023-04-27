import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'

function SportDetails() {
    const [spor,setSpor] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/spor/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setSpor(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
     <Meta title = {'sport'}/>
      <SinglePage image={spor.image} title={spor.title} description={spor.description}/>
      </>
  )
}

export default SportDetails