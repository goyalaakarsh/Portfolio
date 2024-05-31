import React from 'react';

const ProjectItems = ({ item }) => {
    return (
        <div className="project_card" key={item.id}>
            <img src={item.image} alt="" className='project_img' />

            <div className="project_details">
                <div>
                    <h3 className='project_title'>{item.title}</h3>
                    {item.category === 'web' && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <i className="uil uil-github project_github"></i>
                        </a>
                    )}
                    {item.category === 'design' && (
                        <a href={item.figma} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-figma figma-icon"></i>
                        </a>

                    )}
                </div>

                <p className="project_description">{item.description}</p>
            </div>
        </div>
    );
};

export default ProjectItems;
