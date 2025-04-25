import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">Resume Analyzer</h2>
                    <p className="text-sm">
                        Powered by AI to help you analyze resumes, highlight strengths, and find better job opportunities.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link to="/AboutUs" className="hover:text-blue-600">About</Link></li>
                        <li><Link to="/Contact" className="hover:text-blue-600">Contact</Link></li>
                        <li><Link to="/help" className="hover:text-blue-600">Help</Link></li>
                    </ul>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Tools</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/analyze" className="hover:text-blue-600">Analyze Resume</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Job Recommender</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Resume Tips</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-gray-600">
                        {/* <a  target="_blank" href="#" aria-label="Twitter" className="hover:text-blue-600"><Twitter size={20} /></a> */}
                        <a target='_blank' href="https://www.linkedin.com/in/abhijit-maske-58751925a" aria-label="LinkedIn" className="hover:text-blue-600"><Linkedin size={20} /></a>
                        <a target='_blank' href="https://github.com/abhijit7498" aria-label="GitHub" className="hover:text-blue-600"><Github size={20} /></a>
                        <a target='_blank' href="https://www.instagram.com/abhi__maske/#" aria-label="Instagram" className="hover:text-blue-600"><Instagram size={20} /></a>
                        <a target='_blank' href="https://portfolio-theta-two-32.vercel.app/" aria-label="Portfolio" className="hover:text-blue-600"><LinkIcon size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-300 py-4 text-center text-sm">
                © {new Date().getFullYear()} Resume Analyzer. Made with ❤️ by <span className="font-semibold">Abhijit Maske</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
