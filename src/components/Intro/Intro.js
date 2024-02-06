import React from "react";
import "animate.css";
import insta from "../../Images/igram_img.png";
import github from "../../Images/ghub_img.png";
import linkedin from "../../Images/link_img.png";
import me from "../../Images/coder_img.jpg";
import "./Intro.css";

const Intro = () => {
    return(
        <>
        <div className="intro" id="intro">
            <div className="m-left">
                <div className="m-name">
                    <span className="animate__animated animate__backInLeft">Hi!🙏 I Am,</span>
                    <span className="animate__animated animate__backInLeft">Kartikeya Shukla</span>
                    <span className="animate__animated animate__fadeIn animate__delay-2s animate__slow">
                        Currently a 2nd year UG at IIT KANPUR. A little health concious so i hit Gym regularly. Love to have a cricket match any day. I am currently focused on Frontend devlopment. I also do competitive programming on a regular basis! Gaining knowledge in ML as well!
                    </span>
                </div>
                <div className="m-icons">
                    <a href="https://github.com/kartik3yaS" target="_blank">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/kartikeya-shukla-63b433250/" target="_blank">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/kartikeya.22/?hl=en" target="_blank">
                        <img src={insta} alt="" />
                    </a>
                </div>
            </div>
            <div className="m-right">
                <img src={me} alt=""/>
            </div>
        </div>
        </>
    )
}

export default Intro;