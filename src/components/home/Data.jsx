import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import ResumePDF from '../../assets/Resume.pdf';

gsap.registerPlugin(TextPlugin);

const Data = () => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const subtitles = [
      'Student',
      'Full Stack Developer',
      'Designer'
    ];
    
    let currentIndex = 0;

    const typeSubtitle = () => {
      gsap.to(subtitleRef.current, {
        duration: 2,
        text: subtitles[currentIndex],
        ease: 'none',
        repeat: 1,
        repeatDelay: 2,
        yoyo: true,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % subtitles.length;
          setTimeout(typeSubtitle, 0); // Wait 1 second before changing the text again
        }
      });
    };

    typeSubtitle();
  }, []);

  return (
    <div className="home_data">
      <h1 className="home_title">
        <span>Hi!👋🏻 </span>
        <br /> 
        I'm Aakarsh Goyal
      </h1>
      <p  className="home_subtitle">
        <span ref={subtitleRef}></span>
        <div id="cursor"></div>
      </p>
      <p className="home_description">
        A second-year student and have been honing my skills in web development, particularly with the MERN stack, along with a strong focus on design.
      </p>

      <div className="home_btn-container">
        <a href="#contact" className="button button-flex">
          Say Hello <i className="uil uil-message say-hello-icon"></i>
        </a>
        <a href={ResumePDF} download="Aakarsh_Goyal_Resume.pdf" className="button button-flex">
          Download Résumé <i className="uil uil-file-download-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Data;
