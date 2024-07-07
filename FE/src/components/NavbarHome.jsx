import React from 'react';
import LOGO from '../assets/img/netselector.png';

const NavbarHome = () => {
    return (
        <nav className="flex justify-between items-center bg-black p-4 shadow-lg">
            <div className="flex items-center">
                <img src={LOGO} alt="Logo" className="h-20 w-auto mr-2 transition-transform duration-300 transform hover:scale-110" />
                <div className="text-2xl font-bold text-white transition-transform hover:scale-105 mx-2 -translate-x-5 -translate-y-1">NetElector</div>
            </div>
            <ul className="flex list-none">
                <li className="mx-4 navbar-list-item">
                    <a href="#funding" className="text-white text-lg no-underline hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">Home</a>
                </li>
                <li className="mx-4 navbar-list-item">
                    <a href="#details" className="text-white text-lg no-underline hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">Proposal</a>
                </li>
                <li className="mx-4 navbar-list-item">
                    <a href="#updates" className="text-white text-lg no-underline hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">Updates</a>
                </li>
                <li className="mx-4 navbar-list-item">
                    <a href="#solutions" className="text-white text-lg no-underline hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">About Us</a>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <button className="font-bold tracking-wider border-none rounded-full bg-slate-700 text-green-600 py-3 px-6 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95">
                   Add Proposal
                </button>
                {/* <div className="relative">
                    <button className="text-white focus:outline-none transition-colors duration-300 transform hover:rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current hover:text-gray-300 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg hidden transition-all duration-300 opacity-0 scale-0 origin-top">
                        <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300">Profile</a>
                        <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300">Settings</a>
                        <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300">Logout</a>
                    </div>
                </div> */}
            </div>
        </nav>
    );
};

export default NavbarHome;
