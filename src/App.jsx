import { useState } from 'react'
import './App.css'
import Backgroundposter from './assets/Backgroundposter.svg'
import { IoIosAttach } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/AuthenticationComponents/Login';
import Signup from './Components/AuthenticationComponents/Signup';
import Protectedroutes from '../Redux/Protectedroutes';
import { AuthProvider } from '../Redux/AuthContext';
import ProfilePage from './Components/ProfilePage';
import AnalyzeResume from './Components/AnalyzeResume';
import ResumeAnalysisDetails from './Components/ResumeAnalysisDetails ';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Help from './Components/Help';

function App() {


  return (
    <>
    <AuthProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Protectedroutes><Home /></Protectedroutes>} />
          <Route path='/ProfilePage' element={<Protectedroutes><ProfilePage/></Protectedroutes>}/>
          <Route path='/Analyze' element={<Protectedroutes><AnalyzeResume/></Protectedroutes>}/>
          <Route path='/ResumeAnalyzeDetails' element={<Protectedroutes><ResumeAnalysisDetails/></Protectedroutes>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<Signup/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
        <Footer/>
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
