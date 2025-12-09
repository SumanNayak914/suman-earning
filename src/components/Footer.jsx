// src/components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    // Footer Links Data Structure
    const footerLinks = {
        Products: [
            'Runload Kit Pro',
            'Download Manager',
            'MP3 Converter',
            'Video Downloader',
        ],
        Company: [
            'About Us',
            'Newsroom',
            'Global Presence',
            'Careers',
            'Partnerships',
        ],
        'Help Center': [
            'Support Center',
            'Contact Us',
            'Refund Policy',
            'Cancellation',
            'FAQ',
        ],
    };

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                
                {/* --- Top Section: Logo, Main Links, and Social Media --- */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 pb-10 border-b border-gray-700">
                    
                    {/* 1. Logo and Tagline */}
                    <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
                        <div className="flex items-center text-3xl font-bold text-white mb-3">
                            <div className="bg-red-600 text-white p-2 rounded-lg text-2xl mr-2 font-extrabold">
                                R
                            </div>
                            <span>Runload Kit</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Your All-in-One Video Downloader.
                        </p>
                    </div>

                    {/* 2. Products Links */}
                    {Object.keys(footerLinks).map((category) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold mb-4 text-lg border-b-2 border-red-600 inline-block">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {footerLinks[category].map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:text-red-500 transition duration-150 text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* 5. Follow Us (Social Media) */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg border-b-2 border-red-600 inline-block">
                            Follow us
                        </h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-red-500 transition duration-150">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition duration-150">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition duration-150">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition duration-150">
                                <Youtube className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Section: Copyright and Legal --- */}
                <div className="pt-8 text-center md:text-left">
                    <p className="text-sm text-gray-500">
                        Copyright © 2025 Runload Kit. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-3 text-sm">
                        <a href="#" className="hover:text-white transition duration-150">
                            Terms and Conditions
                        </a>
                        <a href="#" className="hover:text-white transition duration-150">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition duration-150">
                            Cookie Preferences
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;