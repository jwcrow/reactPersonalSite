import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar';
import Mission from '../components/Mission';
import Skills from '../components/Skills';
import Inspiration from '../components/Inspiration';
import Contact from '../components/Contact';
import React from 'react';


const Home = () => {
  return (
      <div>
        <Navbar1/>
        <HomePage/>
        <Mission/>
        <Skills/>
        <Inspiration/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default Home;
