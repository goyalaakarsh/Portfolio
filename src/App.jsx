import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SvgString from './components/SvgString/SvgString';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Projects />
        <SvgString/>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
