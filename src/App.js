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
