import React, { useState } from 'react'
import userRegistration from '../../Utilites/userRegistration';
import CustomToastContainer from '../CustomToastContainer';
const Signup = () => {
    const [formData,setFormData]= useState(
    {
      name:"",
      email:"",
      password:""
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

  return (
    <>
    <CustomToastContainer/>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8 sm:p-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
          <form className="space-y-4" onSubmit={(e)=>userRegistration(e,formData)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>  
      </>)
}

export default Signup