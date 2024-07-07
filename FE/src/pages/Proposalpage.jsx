import React from 'react';
import Proposals from '../components/Proposals';
import NavbarHome from '../components/NavbarHome';
import Footer from '../components/Footer';

const Proposalpage = () => {
  return (
    <div className='bg-gray-900'>
      <NavbarHome />
      <Proposals />
      <Footer />
    </div>
  );
};

export default Proposalpage;
