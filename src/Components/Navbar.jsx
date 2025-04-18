import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Redux/AuthContext';
import AccountOptions from './AccountOptions';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [IsAccountoption, setIsAccountoption] = useState(false);
  const { UserCredentials } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 shadow-md"
    >
      <div className="w-full h-20 bg-white border-b border-gray-200 flex justify-between items-center px-6 md:px-16">
        <div className="text-3xl font-extrabold text-blue-600">
          <Link to='/'>Resume Analyzer</Link>
        </div>

        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 text-gray-700 text-md font-medium">
              <li className="hover:text-blue-600 transition-all"><Link to='/'>Home</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/about'>About Us</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/contact'>Contact</Link></li>
              <li className="hover:text-blue-600 transition-all"><Link to='/help'>Help</Link></li>
            </ul>
          </nav>

          {/* Added Analyze Resume button */}
          <Link 
            to="/ProfilePage" 
            className="bg-yellow-300 hover:bg-yellow-400 text-blue-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all"
          >
            Analyze Resume
          </Link>

          <div className="relative">
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
    </motion.div>
  );
};

export default Navbar;
