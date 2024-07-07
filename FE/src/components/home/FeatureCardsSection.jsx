import React from 'react';
import vote from '../../assets/img/icon1.png'; // Update with the correct path to your image
import stellaricon from '../../assets/img/icon2.png'; // Update with the correct path to your image
import globeIcon from '../../assets/img/icon3.png'; // Update with the correct path to your image

const FeatureCardsSection = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    
    return (
        <div {...settings} className="relative">
            <section className="relative flex flex-wrap justify-center p-8 bg-black text-white -mt-24"> {/* Adjust the margin-top to overlap */}
                <div
                    data-aos="fade-up"
                    className="absolute w-full flex justify-center top-[-6rem]"> {/* Position the first card absolutely */}
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-1/2 transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg z-20">
                        <div className="py-10">
                            <h2 className="text-2xl font-semibold mb-4">Secure and Transparent Voting Process</h2>
                            <p className="mb-4">Participate in decentralized voting with full transparency and security.</p>
                            <button className="bg-[#2ED846] text-black border-none py-2 px-4 cursor-pointer rounded-md transition transform hover:scale-105">
                                Start Voting
                            </button>
                        </div>
                        <div className="text-8xl mb-2">
                            <img src={vote} alt="Briefcase Icon" className="h-36 w-36" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="w-full flex justify-between flex-wrap md:flex-nowrap mt-36"> {/* Add top margin to adjust for the absolute positioning */}
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-[calc(50%-1rem)] mb-6 md:mb-0 transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg">
                        <div className="mt-auto">
                            <h2 className="text-2xl font-semibold mb-4">Earn Rewards for Participating</h2>
                            <p className="mb-4">Receive rewards and incentives for active participation in the voting process.</p>
                            <p className="mb-4">+ 10 voting tokens!</p>
                        </div>
                        <div className="text-8xl mb-2">
                            <img src={stellaricon} alt="Money Bag Icon" className="h-36 w-36" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-[calc(50%-1rem)] transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Participate Globally</h2>
                            <p className="mb-4">Contribute to voting processes globally, ensuring inclusivity and fairness.</p>
                        </div>
                        <div className="text-8xl mb-2">
                            <img src={globeIcon} alt="Globe Icon" className="h-36 w-44" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeatureCardsSection;