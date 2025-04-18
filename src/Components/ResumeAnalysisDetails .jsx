import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Doughnut, Line } from 'react-chartjs-2'; // For charts
import { FaCheckCircle } from "react-icons/fa"; // For icons
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const ResumeAnalysisDetails = ({ resumeData, jobRecommendations }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Chart Data for Resume Analysis
  const skillData = {
    labels: ['JavaScript', 'React', 'Node.js', 'CSS', 'Java'],
    datasets: [
      {
        data: [35, 25, 15, 10, 15],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const experienceData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Experience Timeline',
        data: [1, 2, 3, 4, 5, 6],
        fill: false,
        borderColor: '#FF5733',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Resume Analysis Completed</h1>
          <p className="text-lg text-gray-600">See your detailed resume analysis and job recommendations</p>
        </header>

        {/* Resume Analysis Overview */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resume Analysis Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
              <FaCheckCircle className="text-4xl text-blue-600 mb-2" />
              <h3 className="text-xl font-semibold">Skill Match</h3>
              <p className="text-gray-700">85% match with desired skills in the job market</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-green-100 rounded-lg shadow-md">
              <FaCheckCircle className="text-4xl text-green-600 mb-2" />
              <h3 className="text-xl font-semibold">Experience Level</h3>
              <p className="text-gray-700">5 years of relevant experience</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-yellow-100 rounded-lg shadow-md">
              <FaCheckCircle className="text-4xl text-yellow-600 mb-2" />
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-gray-700">Bachelor's Degree in Computer Science</p>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resume Skills & Experience Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Skills Distribution</h3>
              <Doughnut data={skillData} />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Experience Timeline</h3>
              <Line data={experienceData} />
            </div>
          </div>
        </section>

        {/* Job Recommendations Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Recommendations</h2>
          <div className="space-y-4">
            {jobRecommendations?.map((job, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>
                <Link to={`/job/${job.id}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Actionable Feedback */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Suggestions to Improve Your Resume</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Consider adding a professional summary at the beginning of your resume.</li>
            <li>Ensure your skills section is aligned with the job descriptions you're targeting.</li>
            <li>Include quantifiable results in your experience section to highlight your impact.</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default ResumeAnalysisDetails;
