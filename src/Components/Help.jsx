import React from 'react';

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Help & Support</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <div>
          <h3 className="text-xl font-semibold">🧠 How does Resume Analyzer work?</h3>
          <p>We use AI and natural language processing to extract key information from your resume, score it, and match you with suitable job opportunities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">📄 What file formats are supported?</h3>
          <p>You can upload resumes in PDF, DOCX, or TXT format for analysis.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🔒 Is my data secure?</h3>
          <p>Yes! We take your privacy seriously. All uploaded files are encrypted and never shared.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">📬 Still need help?</h3>
          <p>Contact us through our <a href="/contact" className="text-blue-600 underline">contact page</a> and we’ll get back to you within 24 hours.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
