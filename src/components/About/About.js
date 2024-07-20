import React from "react";
import Cards from "../Cards/Cards";
import "./About.css";
import HireMeButton from "../HireMe/HireMe";
import Resume from "./KartikeyaShukla_resume.pdf";

const Hobbies = () => {
    return (
        <>
            <div className="about" id="hobbies">
                <div className="i-left">
                    <span className='animate__animated animate__lightSpeedInLeft'>My Main</span>
                    <span className='animate__animated animate__lightSpeedInLeft animate__delay-1s'>Hobbies</span>
                    <span className='animate__animated animate__fadeIn animate__delay-2s animate__slow'>
                        I regularly participate in contests on Codeforces.<br />
                        I enjoy making projects in web development!
                    </span>
                    <a href={Resume} target="_blank" rel="noreferrer">
                        <button className="a-button">Check my CV</button>
                    </a>
                </div>
                <div className="i-right">
                    <Cards 
                        heading={"Developer"}
                        details={"HTML, CSS, Tailwind-CSS, JavaScript, ReactJS, PHP, MySQL, C/C++"}
                    />
                    <Cards
                        heading={"Programmer"}
                        details={"Regularly participates in Codeforces contests. Proficient in Data Structures and Algorithms."} 
                    />
                    <Cards 
                        heading={"Sports Enthusiast"}
                        details={"Played cricket at school level!"}
                    />
                </div>
            </div>
        </>
    )
}

export default Hobbies;
