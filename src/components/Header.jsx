// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, DollarSign, Gift, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', isDropdown: false },
        {
            name: 'Earning',
            path: '#',
            isDropdown: true,
            dropdownItems: [
                { name: 'Affiliate Program', path: '/earning/affiliate', icon: TrendingUp },
                { name: 'Referral Bonus', path: '/earning/referral', icon: Gift },
                { name: 'Ad Revenue Share', path: '/earning/ads', icon: DollarSign },
            ]
        },
        { name: 'FAQ', path: '/faq', isDropdown: false },
        { name: 'Download', path: '/download', isDropdown: false },
        { name: 'Blog', path: '/blog', isDropdown: false },
    ];

    return (
        <>
            {/* ========================================
                DESKTOP & TABLET HEADER (md and above)
            ======================================== */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`hidden md:block fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
                    isScrolled ? 'shadow-lg' : 'shadow-md'
                }`}
            >
                <div className="flex items-center justify-between py-4 px-10">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-1.5 rounded-lg text-xl mr-2 leading-none font-sans font-extrabold shadow-md"
                        >
                            R
                        </motion.div>
                        <motion.span
                            className="text-gray-900 text-2xl font-bold"
                            whileHover={{ color: '#ea580c' }}
                            transition={{ duration: 0.3 }}
                        >
                            Runload Kit
                        </motion.span>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-grow justify-center mx-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative w-full max-w-lg group"
                        >
                            <input
                                type="text"
                                placeholder="Search videos, files, or links..."
                                className="w-full py-2.5 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm hover:border-orange-400 hover:shadow-md"
                            />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-600 transition-colors duration-300" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-center space-x-7"
                    >
                        <nav>
                            <ul className="flex space-x-5">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    >
                                        {link.isDropdown ? (
                                            <div
                                                className="relative"
                                                onMouseEnter={() => setActiveDropdown(link.name)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="flex items-center cursor-pointer text-gray-600 hover:text-orange-600 font-medium text-base transition-all duration-300"
                                                >
                                                    {link.name}
                                                    <motion.div
                                                        animate={{
                                                            rotate: activeDropdown === link.name ? 180 : 0
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown className="w-4 h-4 ml-1" />
                                                    </motion.div>
                                                </motion.div>

                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                                            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 p-2 bg-white rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 z-50"
                                                        >
                                                            {link.dropdownItems.map((item, idx) => (
                                                                <motion.div
                                                                    key={item.name}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                >
                                                                    <Link
                                                                        to={item.path}
                                                                        className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200 group"
                                                                    >
                                                                        <motion.div
                                                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                                                        >
                                                                            <item.icon className="w-4 h-4 mr-3" />
                                                                        </motion.div>
                                                                        {item.name}
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={link.path}
                                                className={({ isActive }) =>
                                                    `text-base font-medium transition-all duration-300 flex items-center relative ${
                                                        isActive ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                                                    }`
                                                }
                                                end
                                            >
                                                <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                                    {link.name}
                                                </motion.span>
                                            </NavLink>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/login"
                                className="flex items-center px-5 py-2.5 text-white bg-gradient-to-r from-orange-600 to-orange-500 border border-orange-600 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-medium shadow-md hover:shadow-xl"
                            >
                                Login / Sign Up
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.header>

            {/* ========================================
                MOBILE HEADER (below md)
            ======================================== */}
            <div className="block md:hidden">
                {/* Logo and Menu Button - SCROLLABLE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200"
                >
                    <Link to="/" className="flex items-center">
                        <motion.div
                            whileTap={{ scale: 0.9, rotate: -5 }}
                            className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-1.5 rounded-md text-base mr-2 leading-none font-sans font-extrabold shadow-md"
                        >
                            R
                        </motion.div>
                        <span className="text-gray-900 text-lg font-bold">Runload Kit</span>
                    </Link>

                    <motion.button
                        whileTap={{ scale: 0.9, rotate: 90 }}
                        className="p-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </motion.div>

                {/* Search Bar - STICKY (This stays at top when scrolling) */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-0 w-full bg-white shadow-md z-50 px-4 py-3"
                >
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search videos, files..."
                            className="w-full py-2.5 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </motion.div>

                {/* Mobile Navigation Menu - SCROLLABLE */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full bg-white border-b border-gray-200 overflow-hidden"
                        >
                            <nav className="p-4">
                                <ul className="flex flex-col space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {link.isDropdown ? (
                                                <details className="group">
                                                    <summary className="flex items-center w-full px-3 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium cursor-pointer transition-all duration-300 list-none">
                                                        <span className="flex-1">{link.name}</span>
                                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                                                    </summary>
                                                    <div className="mt-2 space-y-1 pl-4 border-l-2 border-orange-200 ml-3">
                                                        {link.dropdownItems.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                to={item.path}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
                                                            >
                                                                <item.icon className="w-4 h-4 mr-2 text-orange-600" />
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </details>
                                            ) : (
                                                <NavLink
                                                    to={link.path}
                                                    className={({ isActive }) =>
                                                        `block px-3 py-2.5 font-medium rounded-lg transition-all duration-300 ${
                                                            isActive
                                                                ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600'
                                                                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                                        }`
                                                    }
                                                    onClick={() => setIsMenuOpen(false)}
                                                    end
                                                >
                                                    {link.name}
                                                </NavLink>
                                            )}
                                        </motion.li>
                                    ))}
                                    
                                    {/* Login Button */}
                                    <motion.li
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: navLinks.length * 0.05 }}
                                        className="pt-3"
                                    >
                                        <Link
                                            to="/login"
                                            className="w-full block text-center py-2.5 text-white bg-gradient-to-r from-orange-600 to-orange-500 border border-orange-600 rounded-lg hover:from-orange-700 hover:to-orange-600 font-medium shadow-md transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Login / Sign Up
                                        </Link>
                                    </motion.li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Header;