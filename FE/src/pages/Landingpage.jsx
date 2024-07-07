import React from 'react'
import HeroSection from '../components/home/HeroSection';
import FeatureCardsSection from '../components/home/FeatureCardsSection';
import CustomisationSection from '../components/home/CustomisationSection';
import Footer from '../components/home/Footer';
import NavbarHome from '../components/home/NavbarHome';
import StepsSection from '../components/home/StepsSection';
import './landing.css'

const Landingpage = () => {
  return (
    <div className="App">
      <NavbarHome />
    <HeroSection></HeroSection>
      <FeatureCardsSection />
      <CustomisationSection />
      <StepsSection></StepsSection>
      <Footer />
    </div>
  );
}

export default Landingpage