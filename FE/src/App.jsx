import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import LoadingPage from './pages/LoadingPage.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Proposalpage from './pages/Proposalpage.jsx';
import AddCards from './pages/Agenda.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landingpage from './pages/Landingpage.jsx';
import AOS from "aos";
import "aos/dist/aos.css"
import Vote from './pages/vote.jsx';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #121212;
    color: #fff;
  }
`;





const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    
    <div>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/proposal" element={<Proposalpage></Proposalpage>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/newProposal" element={<AddCards></AddCards>}></Route>
          <Route path="/vote" element={<Vote></Vote>}></Route>          
        </Routes>
      </BrowserRouter>
          </div>   
  );
};

export default App;
