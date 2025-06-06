import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CustomToastContainer = () => {
  return (
    <ToastContainer position="top-right" autoClose={2000} pauseOnHover={false} />

)
}

export default CustomToastContainer