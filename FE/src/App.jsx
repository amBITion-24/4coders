import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Aboutus from './pages/Aboutus.jsx';
import Proposalpage from './pages/Proposalpage.jsx';
import AddCards from './pages/Agenda.jsx';

import Landingpage from '../src/pages/LandingPage.jsx';
import AOS from "aos";
import "aos/dist/aos.css"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  {
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
      {/* <GlobalStyle />
    <LoadingPage /> */}
{/*<Landingpage></Landingpage>*/}
<Aboutus></Aboutus>
{/*<Proposalpage></Proposalpage> */}
{/*<AddCards></AddCards>*/} 
          </div>
    
    
    
    
    
      
  );
};

export default App;
