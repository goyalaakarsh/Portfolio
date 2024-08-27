import React, {useRef, useEffect} from 'react';
import './home.css';
import Social from './Social';
import Data from './Data'
import ScrollDown from './ScrollDown';



const Home = () => {
  const homeImgRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline animation
    const navtl = gsap.timeline();

    navtl.from(homeImgRef.current, {
      x: 30,
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    });
  }, []);

  return (
    <section className="home section" id='home'>
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div className="home_img" ref={homeImgRef}>

          </div>

          <Data />



        </div>
        <ScrollDown />
      </div>

    </section>
  )
}

export default Home