import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">FundHive</h2>
                    <p>
                        © {new Date().getFullYear()} FundHive. All rights reserved.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><a href="/" className="hover:text-green-400">Home</a></li>
                        <li className="mb-2"><a href="/aboutus" className="hover:text-green-400">About Us</a></li>
                        <li className="mb-2"><a href="/" className="hover:text-green-400">Services</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us On:</h2>
                    <div className="flex space-x-4">
                        <a href="#" target='_blank' className="text-white hover:text-green-400"><FaFacebook size={24} /></a>
                        <a href="https://www.twitter.com" className="text-white hover:text-green-400"><FaTwitter size={24} /></a>
                        <a href="#" target='_blank' className="text-white hover:text-green-400"><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>
                    For any inquiries, email us at{' '}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-white"
                    >
                        FundHivecrowd@gmail.com
                    </a>
                </p>
            </div>
        </div>
    </footer>
);
};

export default Footer;
