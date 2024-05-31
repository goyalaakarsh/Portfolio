import React from 'react';
import ResumePDF from '../../assets/Resume.pdf';

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title"><span>Hi!👋🏻 </span> <br /> I'm Aakarsh Goyal</h1>
      <p className="home_subtitle">
        Student
      </p>
      <p className="home_description">
        First-year B.Tech student focused on Full Stack Web Development with MERN Stack. Skilled in C++, Figma, and Blender. Seeking tech collaborations and learning opportunities.
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
  )
}

export default Data