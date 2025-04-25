import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', resumes: 10 },
  { name: 'Feb', resumes: 25 },
  { name: 'Mar', resumes: 50 },
  { name: 'Apr', resumes: 75 },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          AI-Powered Resume Analyzer
        </h1>
        <p className="text-lg md:text-xl text-blue-600">
          Upload, Analyze, and Improve your Resume with AI
        </p>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto shadow-xl bg-white rounded-2xl p-6 md:p-10 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Resume Upload & Analysis Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="resumes" stroke="#4f46e5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-6">
          Ready to Analyze Your Resume?
        </h3>
        <p className="mb-6 text-gray-600 max-w-xl mx-auto">
          Upload your resume to see AI-generated insights, skills extraction, and job recommendations tailored just for you. Stand out from the crowd!
        </p>
        <Link to='/Analyze'> <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all duration-300">
          Analyze Resume
        </button></Link>
      </motion.div>
    </div>
  );
};

export default HomePage;