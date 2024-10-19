import React from 'react';
import Navbar from './nav/Navbar';
import Skill from './skill/Skill';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
    </>
  );
};

export default App;