import React, { Suspense, lazy } from 'react';
import Skeleton from './components/Skeleton';

// Lazy load the components
const Header = lazy(() => import('./components/Header'));
const SocialLinks = lazy(() => import('./components/SocialLinks'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PageTransition = lazy(() => import('./components/PageTransition'));

function App() {
    return (
            <Suspense
                fallback={
                    <div className="space-y-4 p-4">
                        <Skeleton width="w-full" height="h-20" />

                        <Skeleton width="w-full" height="h-80" />
                        <Skeleton width="w-full" height="h-80" />
                        <Skeleton width="w-full" height="h-80" />
                    </div>
                }
            >
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
            </Suspense>
    );
}

export default App;
