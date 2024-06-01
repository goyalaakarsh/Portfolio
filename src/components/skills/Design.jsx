import React from 'react'
import VanillaTilt from 'vanilla-tilt';
import '../../../vanillla-tilt'

const Design = () => {
    return (
        <div className="skills_content" data-tilt>
            <h3 className="skills_title">
                Design
            </h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div classname="skills_details">
                            <h3 className="skills_name">Figma</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Blender</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Canva</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    {/* <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">React.js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div> */}

                </div>

                {/* <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Bootstrap</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Tailwind</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                </div> */}

                


            </div>
        </div>
    )
}

export default Design