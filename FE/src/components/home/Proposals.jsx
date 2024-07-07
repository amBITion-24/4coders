import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getAllProposals } from './../../services/stellarServices.js';

const Proposals = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });

    const fetchProposals = async () => {
      try {
        const proposalsData = await getAllProposals();
        setProposals(JSON.parse(proposalsData));
      } catch (error) {
        console.error('Failed to fetch proposals:', error);
      }
    };

    fetchProposals();
  }, []);

  return (
    <div className="bg-gray-900 text-white py-10 min-h-screen">
      <h1 className="text-4xl mb-8 text-center">Proposals</h1>
      <div className="flex flex-wrap justify-around">
        {proposals.map((proposal, index) => (
          <div 
            key={index} 
            className="proposal-card bg-gray-800 rounded-lg p-6 m-4 max-w-sm text-center transform transition-transform duration-300 ease-in-out hover:scale-105" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <h2 className="text-2xl mb-4">{proposal.title}</h2>
            <p className="text-gray-400 mb-4">{proposal.description}</p>
            <div className="flex justify-center space-x-4">
              <button 
                className="proposal-button bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer hover:scale-105"
                style={{ backgroundColor: '#4CAF50' }}
              >
                In agreement
              </button>
              <button 
                className="proposal-button bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md cursor-pointer hover:scale-105"
                style={{ backgroundColor: '#FF5733' }}
              >
                In Disagreement
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposals;