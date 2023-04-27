import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'


function ArtsDetails() {
    const [arts,setarts] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/arts/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setarts(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'arts'}/>

      <SinglePage image={arts.image} title={arts.title} description={arts.description}/>
      </>
  )
}

export default ArtsDetails