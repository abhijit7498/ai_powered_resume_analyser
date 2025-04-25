import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-lg">
        Have a question, suggestion, or need support? We'd love to hear from you!
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
