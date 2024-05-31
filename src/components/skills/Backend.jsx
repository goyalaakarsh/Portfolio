import React from 'react'

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">
                Backend
            </h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div classname="skills_details">
                            <h3 className="skills_name">Node.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">React.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">SQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

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

export default Backend