import React from "react";
import Cards from "../Cards/Cards";
import "./About.css"
import HireMeButton from "../HireMe/HireMe";
// import Resume from "../Resume/Resume";
import Resume from "./kartikeyaShukla_resume.pdf";

const Hobbies = () => {
    return(
        <>
        <div className="about" id="hobbies">
            <div className="i-left">
                <span className='animate__animated animate__lightSpeedInLeft'>My Main</span>
                <span className='animate__animated animate__lightSpeedInLeft animate__delay-1s'>Hobbies</span>
                <span className='animate__animated animate__fadeIn animate__delay-2s animate__slow'>
                    I give regular contest on codeforces.
                    <br /> 
                    Enjoy making projects on web devlopment!
                </span>
                <a href={Resume} target="_blank" rel="noreferrer">
                    <button className="a-button">Check my CV</button>
                </a>
                {/* // <Resume /> */}
                <HireMeButton />
            </div>
            <div className="i-right">
                <Cards 
                    // emoji={web}
                    heading={"Developer"}
                    details={"Html, Css, Javascript, React, Firebase, C/C++"}
                />
                <Cards
                    heading={"Programmer"}
                    details={"Regular at giving contest at codeforces. Good knowledge of Data Structure and Algorithms."} 
                />
                <Cards 
                    heading={"Sports Enthusiasts"}
                    details={"Played cricket at school level! TT and Badminton are other fav. games"}
                />
            </div>
        </div>
        </>
    )
}

export default Hobbies;