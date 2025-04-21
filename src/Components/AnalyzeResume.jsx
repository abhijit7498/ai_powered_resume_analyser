import React, { useState,useEffect} from 'react';
import { IoIosAttach } from "react-icons/io";
import { AiOutlineCloudUpload, AiOutlineDelete } from "react-icons/ai";
import handleUploadResume from '../Utilites/handleUploadResume';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const AnalyzeResume = () => {
  const [IsDraging, setIsDraging] = useState(false);
  const [File, setFile] = useState(null);
  const [loading, setloading] = useState(false);
  const [AnalyseData, setAnalyseData] = useState(null)
  const navigate=useNavigate();
console.log(AnalyseData)
  useEffect(() => {
    console.log("1")
    if (AnalyseData) {
      console.log("2")
      navigate('/ResumeAnalyzeDetails', {state:{AnalyseData}});
    }
  }, [AnalyseData]);
  const handleDragover = (e) => {
    e.preventDefault();
    setIsDraging(true);
  };

  const handleDragLeave = () => {
    setIsDraging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type !== "application/pdf") {
      return alert("Please upload a PDF file.");
    }
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>{
      loading?<Loading/>:
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center"
      >
        <input
          type="file"
          accept=".pdf"
          id="resume-upload"
          className="hidden"
          onChange={handleFileChange}
        />

        <div
          className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300 ${
            IsDraging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
          }`}
          onClick={() => !File && document.getElementById("resume-upload").click()}
          onDragOver={handleDragover}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <AiOutlineCloudUpload className="text-5xl text-blue-400 mb-4" />
          {!File ? (
            <>
              <p className="text-gray-700 font-medium">
                Drag & drop your resume here, or <span className="text-blue-600 underline">click to browse</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">Only PDF files are supported</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-gray-800">{File.name}</p>
              <button
                className="mt-3 text-sm text-red-500 hover:underline flex items-center gap-1"
                onClick={() => setFile(null)}
              >
                <AiOutlineDelete /> Remove file
              </button>
            </>
          )}
        </div>

        {File && (
          <motion.button
            onClick={() => handleUploadResume(File,setloading,setAnalyseData)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Analyze Resume
          </motion.button>
        )}
      </motion.div>
    </div>
}</>
  );
};

export default AnalyzeResume;
