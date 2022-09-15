import React from 'react';
import About from './About';
import Awards from './Awards';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Projects from './Projects';


function Main(){
    return(
        <React.Fragment>
            <HeroSection />
            <About />
            <Experience />
            <Education />
            <Awards />
            <Projects />
            <Footer />
        </React.Fragment>
    )
}

export default Main;