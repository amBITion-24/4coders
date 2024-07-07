import React, { useEffect, useState } from 'react';
import { retrievePublicKey, checkConnection } from "../services/freighterServices.js";
import { createProposal, castVote, endVoting, getProposalResults, getAllProposals, fetchPoll } from "../services/stellarServices.js";
const fetchData = async () => {
  try {
    const response = await fetch('https://localhost:3000/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
function Tester() {
  const [connect, setConnect] = useState("Connect");
  const [publicKey, setPublicKey] = useState("Wallet not Connected..");
  const [proposals, setProposals] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const key = await retrievePublicKey();
        setPublicKey(key);
        setConnect("Connected!");
      } catch (error) {
        console.error("Failed to retrieve public key:", error);
      }
    };

    if (publicKey === "Wallet not Connected..") {
      connectWallet();
    }
  }, [publicKey]);

  const fetchAllProposals = async () => {
    try {
      const result = await getAllProposals();
      setProposals(result);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    }
  };

  return (
    <div>
      <h1>Tester</h1>
      <p>{connect}</p>
      <p>{publicKey}</p>
      <button onClick={fetchAllProposals}>Get All Proposals</button>
      <ul>
        {proposals.map((proposal, index) => (
          <li key={index}>
            Proposal ID: {proposal[0]} <br />
            Title: {proposal[1]} <br />
            Description: {proposal[2]} <br />
            Ended: {proposal[3] ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tester;