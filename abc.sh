#!/bin/bash

# Install required dependencies
npm install react-scroll react-icons react-router-dom framer-motion

# Set up Tailwind CSS if not already done
npx tailwindcss init -p

# Update tailwind.config.js
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Update src/index.css
cat > src/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Create src/components/Header.js
cat > src/components/Header.js <<EOL
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-lg">
          <img src="path_to_your_logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          Sumit Singh
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
EOL

# Create src/components/SocialLinks.js
cat > src/components/SocialLinks.js <<EOL
import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-0 top-1/3 transform -translate-y-1/2 space-y-4 p-2 bg-white shadow-lg rounded-r-md">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-blue-600" />
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl text-blue-400" />
      </a>
      <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-2xl text-red-600" />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-black" />
      </a>
      <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer">
        <FaBook className="text-2xl text-green-600" />
      </a>
    </div>
  );
};

export default SocialLinks;
EOL

# Create src/components/Hero.js
cat > src/components/Hero.js <<EOL
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-5xl font-bold">HEY, I'M SUMIT SINGH</h1>
      <p className="text-lg mt-4">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      <ScrollLink to="projects" smooth={true} duration={500}>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg">PROJECTS</button>
      </ScrollLink>
    </section>
  );
};

export default Hero;
EOL

# Create src/components/Footer.js
cat > src/components/Footer.js <<EOL
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 text-center">
      <p>&copy; 2024 Sumit Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
EOL

# Create src/components/About.js
cat > src/components/About.js <<EOL
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-gray-300 p-8">
      <h1 className="text-3xl">Sumit Singh</h1>
      <p>Frontend Developer with 3.5 years of experience...</p>
    </section>
  );
};

export default About;
EOL

# Create src/components/WorkExperience.js
cat > src/components/WorkExperience.js <<EOL
import React from 'react';
import Timeline from './Timeline';

const workEvents = [
  {
    date: 'Apr 2022 – Current',
    title: 'Frontend Developer - BITCS',
    description: 'Developed server-side rendered components...',
  },
  {
    date: 'Jan 2021 - Apr 2022',
    title: 'Software Developer - I Gurugram, Haryana',
    description: 'Developed user engagement features...',
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="bg-gray-800 text-gray-300 p-8">
      <h2 className="text-2xl mb-4">Work Experience</h2>
      <Timeline events={workEvents} />
    </section>
  );
};

export default WorkExperience;
EOL

# Create src/components/Projects.js
cat > src/components/Projects.js <<EOL
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-gray-300 p-8">
      <h2 className="text-2xl mb-4">Projects</h2>
      <p>Details about various projects...</p>
    </section>
  );
};

export default Projects;
EOL

# Create src/components/Contact.js
cat > src/components/Contact.js <<EOL
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-gray-300 p-8">
      <h2 className="text-2xl mb-4">Contact</h2>
      <p>Contact details...</p>
    </section>
  );
};

export default Contact;
EOL

# Create src/components/PageTransition.js
cat > src/components/PageTransition.js <<EOL
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
EOL

# Update src/App.js
cat > src/App.js <<EOL
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <SocialLinks />
      <main className="pt-16">
        <PageTransition>
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <Contact />
        </PageTransition>
      </main>
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
EOL

# Success message
echo "Portfolio update completed successfully."
