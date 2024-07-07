import React from 'react';
import MeetTheTeam from '../components/home/MeetTheTeam';
import NavbarHome from '../components/home/NavbarHome';
import Footer from '../components/home/Footer'

const Aboutus = () => {
  return (
    <div className='bg-custom-gradient'>
      <NavbarHome />
     <MeetTheTeam></MeetTheTeam>
     <Footer></Footer>
    </div>
  );
};

export default Aboutus;
