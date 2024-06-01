import React from 'react'
import VanillaTilt from 'vanilla-tilt';
import '../../vanillla-tilt'


const Languages = () => {
    return (
        <div className="skills_content" data-tilt>
            <h3 className="skills_title">
                Languages
            </h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div classname="skills_details">
                            <h3 className="skills_name">C</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">C++</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Java</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Javascript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Python</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    {/* <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Tailwind</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div> */}

                </div>

                


            </div>
        </div>
    )
}

export default Languages