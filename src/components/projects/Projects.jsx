import React from 'react'
import './projects.css'
import Project from './Project'

const Projects = () => {
  return (
    <section className="projects section" id='projects'>
        <h2 className="section_title">Projects</h2>
        <span className='section_subtitle'>What I've built</span>

        <Project/>

    </section>
  )
}

export default Projects