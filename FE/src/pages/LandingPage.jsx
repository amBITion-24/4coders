import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import CustomisationSection from '../components/CustomisationSection';
import Footer from '../components/Footer';
import NavbarHome from '../components/NavbarHome';
import StepsSection from '../components/StepsSection';
import './landing.css'; // Assuming this is your CSS file for styling

const Landingpage = () => {
  return (
    <div className="App">
      <NavbarHome />
      <HeroSection />
      <FeatureCardsSection />
      <CustomisationSection />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Landingpage;
