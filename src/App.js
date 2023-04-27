import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Container from './components/Container';
import Navbar from './sections/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './sections/Footer';
import Arts from './pages/Arts';
import Sport from './pages/Sport';
function App() {

  const [articles, setArticles] = useState([])
  const [breakingNews, setbreakingNews] = useState([])
  const [spor, setSpor] = useState([])
  const [economy, seteconomy] = useState([])
  const [arts, setarts] = useState([])
  const [food, setfood] = useState([])
  const [policy, setpolicy] = useState([])
  const [tourism, settourism] = useState([])
  const [LifeStyle, setLifeStyle] = useState([])
  const [Bussines, setBussines] = useState([])
  const [MostRead, setMostRead] = useState([])
  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/World/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/BreakingNews/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setbreakingNews(resp))
    .catch(error => console.log(error))
  }, [])


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/spor/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setSpor(resp))
    .catch(error => console.log(error))
  }, [])


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/economy/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => seteconomy(resp))
    .catch(error => console.log(error))
  }, [])  


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/arts/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setarts(resp))
    .catch(error => console.log(error))
  }, []) 
  

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/food/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setfood(resp))
    .catch(error => console.log(error))
  }, [])  

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/policy/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setpolicy(resp))
    .catch(error => console.log(error))
  }, [])  


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/Tourism/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => settourism(resp))
    .catch(error => console.log(error))
  }, [])  

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/LifeStyle/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setLifeStyle(resp))
    .catch(error => console.log(error))
  }, [])  
 

  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/Bussines/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setBussines(resp))
    .catch(error => console.log(error))
  }, []) 


  useEffect(() =>{
    fetch('https://walaaarticles.pythonanywhere.com/MostRead/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setMostRead(resp))
    .catch(error => console.log(error))
  }, []) 
  return (
  
   <div>

 

    <ArticleList MostRead={MostRead} Bussines={Bussines} LifeStyle={LifeStyle} articles = {articles} tourism = {tourism} food = {food} arts = {arts} economy = {economy} policy = {policy} spor = {spor} breakingNews = {breakingNews} />
   
    </div>

  );
}

export default App;
