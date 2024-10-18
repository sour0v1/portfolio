import React from 'react';
import Navbar from './nav/Navbar';
import Skill from './skill/Skill';
import Projects from './projects/Projects';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Skill></Skill>
    <Projects></Projects>
    </>
  );
};

export default App;