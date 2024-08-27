import React, {useRef, useEffect} from 'react'

const Social = () => {
  const homeSocialRef = useRef(null);

  useEffect(() => {
      // Create a GSAP timeline animation
      const navtl = gsap.timeline();

      navtl.from(homeSocialRef.current.children, {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2, // Adjust stagger time as needed
      });

  }, []);



  return (
    <div className="home_social" ref={homeSocialRef}>
        <a href="https://www.instagram.com/aakarshgoyall" className="home_social-icon" target='_blank'><i className="uil uil-instagram"></i></a>
        <a href="https://github.com/goyalaakarsh" className="home_social-icon" target='_blank'><i className="uil uil-github"></i></a>
        <a href="https://www.linkedin.com/in/goyalaakarsh/" className="home_social-icon" target='_blank'><i className="uil uil-linkedin"></i></a>
    </div>
  )
}

export default Social