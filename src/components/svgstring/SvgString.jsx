import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './SvgString.css';

const SvgString = () => {
  const pathRef = useRef(null); // Reference to the path element
  const svgRef = useRef(null);  // Reference to the SVG container

  const initialPath = "M 10 100 Q 250 100 490 100"; // Define the initial path

  useEffect(() => {
    const pathElement = pathRef.current;
    const svgElement = svgRef.current;

    const updatePath = (x, y) => {
      const pathString = `M 10 100 Q ${x} ${y} 490 100`;
      gsap.to(pathElement, {
        attr: { d: pathString },
        duration: 0.5,
        ease: "elastic.out(1.75,0.4)"
      });
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { top, left } = svgElement.getBoundingClientRect();
      const y = clientY - top;
      const x = clientX - left;
      updatePath(x, y);
    };

    const handleMouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: initialPath },
        duration: 0.5,
        ease: "elastic.out(1.75,0.2)"
      });
    };

    svgElement.addEventListener('mousemove', handleMouseMove);
    svgElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      svgElement.removeEventListener('mousemove', handleMouseMove);
      svgElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div id='string'>
      <svg ref={svgRef} width="500" height="200">
        <path
          ref={pathRef}
          fill="transparent"
          stroke="black"
          d={initialPath}
        />
      </svg>
    </div>
  );
};

export default SvgString;
