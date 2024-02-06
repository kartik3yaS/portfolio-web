import React from 'react';
import { Link } from 'react-scroll';
import "./HireMe.css";

const HireMeButton = () => {
  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      offset={-7}
      duration={500}
    >
      <button className='hire-me'>Hire Me</button>
    </Link>
  );
};

export default HireMeButton;