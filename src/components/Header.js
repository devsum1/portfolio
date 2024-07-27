import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/images/logo-no-background.png';
import Fade from 'react-reveal/Fade';
import {
    FaUser,
    FaPhone,
    FaFile
} from 'react-icons/fa';


const Header = () => {
    return (
        <>
            <header className="bg-gray-900 text-green-500 p-4 shadow-md fixed w-full z-10">
                <div className="container mx-auto flex justify-center sm:justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo 1" className="w-60 h-10 rounded-full" />
                    </div>
                    <nav className="hidden sm:flex">
                        <ul className="flex space-x-4">
                            <li><ScrollLink to="about" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">ABOUT</ScrollLink></li>
                            <li><ScrollLink to="projects" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">PROJECTS</ScrollLink></li>
                            <li><ScrollLink to="contact" smooth={true} duration={500} className="hover:text-green-600 font-extrabold">CONTACT</ScrollLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <nav className="md:hidden flex fixed bottom-0 left-0 w-full bg-gray-900 z-10 text-green-500 p-2 shadow-md flex justify-around">
                <ScrollLink to="about" smooth={true} duration={500} className="flex flex-col items-center hover:text-green-600">
                    <FaUser className={'text-xl'}/>
                    <span className="text-xs font-extrabold">ABOUT</span>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} className="flex flex-col items-center hover:text-green-600">
                    <FaFile className={'text-xl'}/>
                    <span className="text-xs font-extrabold">PROJECTS</span>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="flex flex-col items-center hover:text-green-600">
                    <FaPhone className={'text-xl'}/>
                    <span className="text-xs font-extrabold">CONTACT</span>
                </ScrollLink>
            </nav>
        </>
    );
};

export default Header;
