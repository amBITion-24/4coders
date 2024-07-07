import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import steps from '../assets/img/pngwing.com.png';
import AOS from 'aos';

const StepsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="steps-section py-20 w-full flex flex-col items-center justify-center min-h-screen " data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">How to contribute to our mission</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-80 max-w-md bg-slate-300 p-4 rounded-md flex-shrink-0 translate-x-80">
            <img src={steps} alt="Contribute" className="w-full h-auto " />
          </div>
          <div className="flex flex-col space-y-4 flex-1 text-lg items-center">
            <div className="w-full max-w-md step-card p-4 border border-gray-200 rounded-xl text-center transition duration-300 ease-in-out hover:border-blue-500">
              <h3 className="text-2xl font-bold mb-2">Step 1</h3>
              <p>Choose a cause you care about and support it.</p>
            </div>
            <div className="w-full max-w-md step-card p-4 border border-gray-200 rounded-xl text-center transition duration-300 ease-in-out hover:border-blue-500">
              <h3 className="text-2xl font-bold mb-2">Step 2</h3>
              <p>Spread the word and inspire others to join the cause.</p>
            </div>
            <div className="w-full max-w-md step-card p-4 border border-gray-200 rounded-xl text-center transition duration-300 ease-in-out hover:border-blue-500">
              <h3 className="text-2xl font-bold mb-2">Step 3</h3>
              <p>Help us raise awarness for impactful and reaching a consensus together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
