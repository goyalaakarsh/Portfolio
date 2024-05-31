import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import ProjectItems from './ProjectItems';

const Project = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (activeCategory === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === activeCategory;
            });
            setProjects(newProjects);
        }
    }, [activeCategory]);

    const handleItemClick = (itemName) => {
        setActiveCategory(itemName);
    };

    return (
        <div>
            <div className="project_filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        className={`project_item ${navItem.name === activeCategory ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleItemClick(navItem.name)}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <div className="project_container container grid">
                {projects.map((project) => (
                    <ProjectItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Project;
