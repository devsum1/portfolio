import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/images/logo-no-background.png';
const Header = () => {
    return (
        <header className="bg-gray-900 text-green-500 p-4 shadow-md fixed w-full z-10 cursor-pointer">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo 1" className="w-60 h-10 rounded-full" />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><ScrollLink to="about" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">ABOUT</ScrollLink></li>
                        <li><ScrollLink to="projects" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">PROJECTS</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">CONTACT</ScrollLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
