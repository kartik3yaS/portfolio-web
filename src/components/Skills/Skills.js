import React from "react";
import "./Skills.css";

const Skills = () => {
    return(
        <>
        <div className="skills" id="skills">
            <div className="s-left">
                <span>Frequently used</span>
                <span>Programming languages &</span>
                <span>Libraries</span>
                <span>
                    C/C++ for programming
                    <br />
                    Mostly React js for frontend devlopment
                    <br />
                    Css for Styling
                    <br />
                    FireBase for database
                </span>
            </div>
            <div className="s-right">
                <div className="s-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt="C++"
                    style={{transform: "scale(0.1)"}} />
                </div>
                <div className="s-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="ReactJs"
                    style={{transform: "scale(0.1)"}} />
                </div>
                <div className="s-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png" alt="Firebase"
                    style={{transform: "scale(0.1)"}} />
                </div>
                <div className="s-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="Css"
                    style={{transform: "scale(0.1)"}} />
                </div>
                <div className="s-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="Css"
                    style={{transform: "scale(0.1)"}} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;