import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavbarHome from '../components/NavbarHome';

const AddCards = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarHome />
      <div className='flex-1 bg-gray-900 flex items-center justify-center'>
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default AddCards;

