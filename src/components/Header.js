import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/images/logo-no-background.png';

const Header = () => {
    return (
        <header className="bg-gray-900 text-green-500 p-4 shadow-md fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img loading={'lazy'} src={logo} alt="Logo" className="w-40 h-10 rounded-full" />
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><ScrollLink to="about" smooth={true} duration={500} className="hover:text-green-600 font-extrabold cursor-pointer">ABOUT</ScrollLink></li>
                        <li><ScrollLink to="projects" smooth={true} duration={500} className="hover:text-green-600 font-extrabold cursor-pointer">PROJECTS</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500} className="hover:text-green-600 font-extrabold cursor-pointer">CONTACT</ScrollLink></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
