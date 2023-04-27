import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from './components/ArticleList';
import Sport from './pages/Sport'
import Tourism from './pages/Tourism'
import Arts from './pages/Arts'
import Economy from './pages/Economy'
import Policy from './pages/Policy'
import Bussines from './pages/Bussines'
import Food from './pages/Food'
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Container from './components/Container';
import SportDetails from './singlePages/sportDetails'
import ArtsDetails from './singlePages/ArtsDetails';
import EconomyDetails from './singlePages/EconomyDetails';
import PolicyDetails from './singlePages/PolicyDetails';
import BussinesDetails from './singlePages/BussinesDetails'
import FoodDetails from './singlePages/FoodDetails'
import LifeStyle from './pages/LifeStyle'
import LifeStyleDetails from './singlePages/LifeStyleDetails'
import MostRead from  './pages/MostRead'
import MostReadDetails from  './singlePages/MostReadDetails'
import BreakingNews from  './pages/BreakingNews'
import BreakingNewsDetails from  './singlePages/BreakingNewsDetails'
import World from  './pages/World'
import WorldDetails from  './singlePages/WorldDetails'
function Router(){
    return(
        <>
        <BrowserRouter>
        <Container>

<Navbar/>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/" element={<ArticleList />}/>
         
        <Route path="/sport" element={<Sport />} />
        <Route path="/sport/:id/" element={<SportDetails />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/arts/:id/" element={<ArtsDetails />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/economy/:id/" element={<EconomyDetails />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/policy/:id/" element={<PolicyDetails />} />
        <Route path="/bussines" element={<Bussines />} />
        <Route path="/bussines/:id/" element={<BussinesDetails />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/:id/" element={<FoodDetails />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/lifestyle/:id/" element={<LifeStyleDetails />} />
        <Route path="/mostRead" element={<MostRead />} />
        <Route path="/mostRead/:id/" element={<MostReadDetails />} />
        <Route path="/breakingNews" element={<BreakingNews />} />
        <Route path="/breakingNews/:id/" element={<BreakingNewsDetails />} />
        <Route path="/world" element={<World />} />
        <Route path="/world/:id/" element={<WorldDetails />} />
        
      </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
   
    
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

