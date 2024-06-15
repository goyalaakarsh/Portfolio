import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../vanillla-tilt"; // Ensure this path is correct

const Frontend = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    // Cleanup on unmount
    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="skills_content" ref={tiltRef} data-tilt>
      <h3 className="skills_title">Frontend</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">React.js</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">Tailwind</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
