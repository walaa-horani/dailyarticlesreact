import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'


function ArtsDetails() {
    const [LifeStyle,setLifeStyle] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/LifeStyle/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setLifeStyle(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'life style'}/>

      <SinglePage image={LifeStyle.image} title={LifeStyle.title} description={LifeStyle.description}/>
      </>
  )
}

export default ArtsDetails