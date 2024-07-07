import React, { useEffect, useState } from 'react';
import { retrievePublicKey, checkConnection } from "../services/freighterServices.js";
import { createProposal, castVote, endVoting, getProposalResults, getAllProposals, fetchPoll } from "../services/stellarServices.js";

function Tester() {
  const [connect, setConnect] = useState("Connect");
  const [publicKey, setPublicKey] = useState("Wallet not Connected..");
  const [proposals, setProposals] = useState([]);

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
            <strong>Proposal ID:</strong> {proposal[0]} <br />
            <strong>Title:</strong> {proposal[1]} <br />
            <strong>Description:</strong> {proposal[2]} <br />
            <strong>Ended:</strong> {proposal[3] ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tester;