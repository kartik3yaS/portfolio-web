import React from "react";
import "animate.css";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
// import me from "../../Images/coder_img.jpg";
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
                    Currently a 2nd year undergraduate student at IIT KANPUR. My main area of expertise<br /> revolves around frontend development, particularly with a focus on React.js. I do<br />competitive programming on a regular basis and i also maintain a regular gym routine.<br />I'm also dedicated to expanding my knowledge in machine learning.
                    </span>
                </div>
                <div className="m-icons">
                    <a href="https://github.com/kartik3yaS" target="_blank">
                        {/* <img src={github} alt="" /> */}
                        <Github color="#1E90FF" size="7rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/kartikeya-shukla-63b433250/" target="_blank">
                        {/* <img src={linkedin} alt="" /> */}
                        <Linkedin color="#1E90FF" size="7rem" />
                    </a>
                    <a href="https://www.instagram.com/kartikeya.22/?hl=en" target="_blank">
                        {/* <img src={insta} alt="" /> */}
                        <Insta color="#1E90FF" size="7rem" />
                    </a>
                </div>
            </div>
            <div className="m-right">
                <img src={me} className="logo" alt="" />
            </div>
        </div>
        </>
    )
}

export default Intro;