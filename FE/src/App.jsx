import React, { useState, useEffect } from 'react';
import { retrievePublicKey, checkConnection } from "./services/freighterServices.js";
import { createGlobalStyle } from 'styled-components';
import LoadingPage from './pages/LoadingPage.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Proposalpage from './pages/Proposalpage.jsx';
import AddCards from './pages/Agenda.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [connect, setConnect] = useState("Connect");
  const [publicKey, setPublicKey] = useState("Wallet not Connected..");
  const [proposals, setProposals] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkWalletConnection = async () => {
      const connectionStatus = await checkConnection();
      setIsConnected(connectionStatus);
    };

    const connectWallet = async () => {
      try {
        const key = await retrievePublicKey();
        setPublicKey(key);
        setConnect("Connected!");
        setIsConnected(true);
      } catch (error) {
        console.error("Failed to retrieve public key:", error);
      }
    };

    checkWalletConnection();

    if (!isConnected) {
      connectWallet();
    }
  }, [isConnected]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/proposal" element={<Proposalpage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/newProposal" element={<AddCards pubkey={publicKey}/>} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;