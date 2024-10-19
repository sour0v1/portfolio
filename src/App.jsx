import React from 'react';
import Navbar from './nav/Navbar';
import Skill from './skill/Skill';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
};

export default App;