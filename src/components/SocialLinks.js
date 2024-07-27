import React, {useState} from 'react';
import Slide from 'react-reveal/Slide';
import {FaChevronLeft, FaChevronRight, FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const SocialLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="fixed z-10 left-0 top-1/3 transform -translate-y-1/2 bg-gray-900 text-gray-300 shadow-lg rounded-r-md flex flex-col p-4 gap-x-4 gap-y-6">
            <button
                onClick={toggleOpen}
                className="text-green-500 hover:text-gray-400 sm:hidden"
            >
                {isOpen ? <FaChevronLeft className="text-4xl" /> : <FaChevronRight className="text-4xl" />}
            </button>
                <div className={`flex flex-col gap-y-6 ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                    <a href="https://www.linkedin.com/in/dev-sumit" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl text-blue-400 hover:text-blue-600"/>
                    </a>
                    <a href="https://github.com/devsum1" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-4xl text-gray-300 hover:text-gray-400"/>
                    </a>
                    <a href="https://www.instagram.com/bhandari_sumit5836" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-4xl text-blue-300 hover:text-blue-400"/>
                    </a>
                    <a href="mailto:writeonsumit@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-4xl text-red-600 hover:text-red-700"/>
                    </a>
                </div>
        </div>

    );
};

export default SocialLinks;
