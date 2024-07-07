import React from 'react';
import customIcon1 from '../../assets/img/custom-icon1.png'; // Update with the correct path to your image
import customIcon2 from '../../assets/img/custom-icon2.png'; // Update with the correct path to your image

const CustomisationSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-wrap justify-around p-8 bg-black text-white">
      <div className="bg-[#020817] text-white p-6 rounded-lg text-center w-full mb-6 md:w-[calc(45%-1rem)] transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg relative">
        <img src={customIcon1} alt="Custom Icon 1" className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 h-20" />
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Customize Your Voting Experience</h2>
          <p className="mb-4">Personalize your voting interface with custom themes and layouts. Tailor your voting experience to match your organization's branding or personal preferences.</p>
          <button className="bg-[#2ED846] text-black border-none py-2 px-4 cursor-pointer rounded-md transition transform hover:scale-105">
            Explore Customization
          </button>
        </div>
      </div>
      <div className="bg-[#020817] text-white p-6 rounded-lg text-center w-full mb-6 md:w-[calc(45%-1rem)] transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg relative">
        <img src={customIcon2} alt="Custom Icon 2" className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 h-20" />
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Transparent and Secure Voting Solutions</h2>
          <p className="mb-4">Utilize advanced blockchain technology for secure, tamper-proof voting processes. Ensure transparency and reliability in every voting event.</p>
          <button className="bg-[#2ED846] text-black border-none py-2 px-4 cursor-pointer rounded-md transition transform hover:scale-105">
            Learn about Security
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomisationSection;
