import React from 'react';
import {ReactTyped} from "react-typed";
import Fade from 'react-reveal/Fade';
import pp from "../assets/images/profile-pic.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-green-500 bg-cover bg-center bg-no-repeat"
        >
            <Fade bottom>

                <h1 className="text-6xl font-bold">
                    <span className={'mr-4'}>
                        HELLO, I'M
                    </span>
                    <ReactTyped
                        strings={["SUMIT SINGH", "A SOFTWARE DEVELOPER"]}
                        showCursor={true}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </h1>
                <p className="text-xl mt-10">
                    Experienced frontend developer crafting responsive,
                </p>
                <p className="text-xl ">
                    dynamic web apps with 3.5 years' expertise.
                </p>
                <a
                    href="https://shorturl.at/H08dN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 px-6 py-3 bg-green-500 text-gray-800 font-bold rounded-lg hover:bg-green-600 transition duration-300"
                >
                    CHECK OUT MY RESUME
                </a>
            </Fade>
        </section>
    );
};

export default Hero;
