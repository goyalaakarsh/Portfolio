import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = ({ options, children, ...rest }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }

    // Cleanup function to destroy the instance when the component unmounts
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} {...rest}>
      {children}
    </div>
  );
};

export default TiltComponent;
