import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Redux/AuthContext';
import AccountOptions from './AccountOptions';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [IsAccountoption, setIsAccountoption] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { UserCredentials } = useAuth();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAccountoption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 shadow-md"
    >
      <div className="w-full h-20 bg-white border-b border-gray-200 flex justify-between items-center px-6 md:px-16">
        <div className="text-2xl font-extrabold text-blue-600">
          <Link to='/'>Resume Analyzer</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-blue-600"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 text-gray-700 text-md font-medium">
              <li className="hover:text-blue-600 transition-all"><Link to='/'>Home</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/AboutUs'>About Us</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/Contact'>Contact</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/help'>Help</Link></li>
            </ul>
          </nav>

          <Link 
            to="/Analyze" 
            className="bg-yellow-300 hover:bg-yellow-400 text-blue-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all"
          >
            Analyze Resume
          </Link>

          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setIsAccountoption(!IsAccountoption)}
              className="flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition-all"
            >
              {UserCredentials ? (
                <p className="font-medium">{UserCredentials?.user?.name?.split(" ")[0]}</p>
              ) : (
                <p className="font-medium">Account</p>
              )}
              <ChevronDown size={18} />
            </div>
            {IsAccountoption && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg">
                <AccountOptions />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 text-md font-medium">
            <li><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link to='/help' onClick={() => setIsMobileMenuOpen(false)}>Help</Link></li>
            <li>
              <Link 
                to="/Analyze" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-yellow-300 hover:bg-yellow-400 text-blue-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all"
              >
                Analyze Resume
              </Link>
            </li>
            <li>
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setIsAccountoption(!IsAccountoption)}
                  className="flex items-center justify-between py-2 px-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition-all"
                >
                  {UserCredentials ? (
                    <p className="font-medium">{UserCredentials?.user?.name?.split(" ")[0]}</p>
                  ) : (
                    <p className="font-medium">Account</p>
                  )}
                  <ChevronDown size={18} />
                </div>
                {IsAccountoption && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg">
                    <AccountOptions />
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
