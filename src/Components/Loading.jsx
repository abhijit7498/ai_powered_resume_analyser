import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ message = "Analyzing your resume..." }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-100">
      <motion.div 
        className="text-center p-6 rounded-xl shadow-md bg-white border border-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-700">
          {message}
        </h2>

        {/* Animated Dots */}
        <div className="flex justify-center mt-2 space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-gray-400"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 0.2,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loading;
