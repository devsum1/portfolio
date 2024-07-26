import React from 'react';
import {
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaBook,
    FaMailchimp,
    FaMailBulk,
    FaEnvelope,
    FaInstagram
} from 'react-icons/fa';
import {FaMessage} from "react-icons/fa6";

const SocialLinks = () => {
    return (
        <div
            className="fixed z-10 left-0 top-1/3 transform -translate-y-1/2 bg-gray-900 text-gray-300 shadow-lg rounded-r-md flex flex-col p-4 gap-x-4 gap-y-6">
            <a href="https://www.linkedin.com/in/dev-sumit" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-4xl text-blue-400 hover:text-blue-600"/>
            </a>
            <a href="https://github.com/devsum1" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl text-gray-300 hover:text-gray-400"/>
            </a>

            <a href="https://www.instagram.com/bhandari_sumit5836"
               target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl text-blue-300 hover:text-blue-400"/>
            </a>
            <a href='mailto:writeonsumit@gmail.com' target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-4xl text-red-600 hover:text-red-700"/>
            </a>
        </div>
    );
};

export default SocialLinks;
