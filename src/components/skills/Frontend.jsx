import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../vanillla-tilt";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Frontend = () => {
  const tiltAndGsapRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt
    if (tiltAndGsapRef.current) {
      VanillaTilt.init(tiltAndGsapRef.current, {
        max: 25,
        speed: 400,
        // glare: true,
        // "max-glare": 0.5,
      });
    }

    // Cleanup VanillaTilt on unmount
    return () => {
      if (tiltAndGsapRef.current) {
        tiltAndGsapRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(tiltAndGsapRef.current, {
      x: -30,
      y: 30,
      opacity: 0,
      // duration: 0.1,
      scrollTrigger: {
        trigger: tiltAndGsapRef.current, // Use current to access the DOM element
        start: "top 80%",
        end: "top 70%",
        scrub: 2,
      }
    });
  }, []);


  return (
    <div className="skills_content" ref={tiltAndGsapRef}  data-tilt>
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
              <h3 className="skills_name">Next.js</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills_name">React.js</h3>
              <span className="skills_level">Intermediate</span>
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
