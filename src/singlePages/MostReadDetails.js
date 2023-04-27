import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import SinglePage from '../components/SinglePage'
import Meta from '../components/Meta'


function ArtsDetails() {
    const [mostRead,setmostRead] = useState("")
    const {id} = useParams()

    useEffect(() =>{
      fetch(`https://walaaarticles.pythonanywhere.com/MostRead/${id}/`, {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          
        }
      })
      .then(resp => resp.json())
      .then(resp => setmostRead(resp))
      .catch(error => console.log(error))
    }, []) 
  return (
    <>
           <Meta title = {'most read'}/>

      <SinglePage image={mostRead.image} title={mostRead.title} description={mostRead.description}/>
      </>
  )
}

export default ArtsDetails