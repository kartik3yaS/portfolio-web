import React from "react";
import "animate.css";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import me from "../../Images/boy1.png";
import "./Intro.css";

const Intro = () => {
    return(
        <>
        <div className="intro" id="intro">
            <div className="m-left">
                <div className="m-name">
                    <span className="animate__animated animate__backInLeft">Hi!👋 I Am,</span>
                    <span className="animate__animated animate__backInLeft">Kartikeya Shukla</span>
                    <span className="animate__animated animate__fadeIn animate__delay-2s animate__slow">
                        Currently a 3rd year undergraduate student at IIT Kanpur, my main areas of expertise encompass both frontend development, particularly with React.js, and backend development using the LAMP tech stack. I regularly engage in competitive programming and maintain a consistent gym routine.
                    </span>
                </div>
                <div className="m-icons">
                    <a href="https://github.com/kartik3yaS" target="_blank" rel="noopener noreferrer">
                        <Github color="#1E90FF" size="3rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/kartikeya-shukla-63b433250/" target="_blank" rel="noopener noreferrer">
                        <Linkedin color="#1E90FF" size="3rem" />
                    </a>
                    <a href="https://www.instagram.com/kartik3ya.22/?hl=en" target="_blank" rel="noopener noreferrer">
                        <Insta color="#1E90FF" size="3rem" />
                    </a>
                </div>
            </div>
            <div className="m-right">
                <img src={me} className="logo" alt="Kartikeya Shukla" />
            </div>
        </div>
        </>
    )
}

export default Intro;
