import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'


function ArtsDetails() {
    const [breaking, setbreaking] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/BreakingNews/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setbreaking(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'breaking news'}/>

      <SinglePage image={breaking.image} title={breaking.title} description={breaking.description}/>
      </>
  )
}

export default ArtsDetails