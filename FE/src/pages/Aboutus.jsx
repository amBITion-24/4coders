import React from 'react';
import MeetTheTeam from '../components/MeetTheTeam';
import NavbarHome from '../components/NavbarHome';
import Footer from '../components/Footer';

const Aboutus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarHome />
      <div className="flex-1">
        <MeetTheTeam />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;

