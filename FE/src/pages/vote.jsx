import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarHome from '../components/home/NavbarHome';
import Footer from '../components/home/Footer';

function Vote() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleVoteFor = () => {
    alert('You voted for the motion');
  };

  const handleVoteAgainst = () => {
    alert('You voted against the motion');
  };

  return (
    <div>
      <NavbarHome />
      <div className="flex justify-center items-center min-h-screen bg-custom-gradient">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-3xl font-bold mb-6">Voting App</h2>
          <button
            onClick={handleVoteFor}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full mb-4 w-full transition duration-300"
          >
            Vote for the Motion
          </button>
          <button
            onClick={handleVoteAgainst}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full w-full transition duration-300"
          >
            Vote Against the Motion
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vote;
