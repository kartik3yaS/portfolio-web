import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <>
            <div className="skills" id="skills">
                <div className="s-left">
                    <span>Frequently used</span>
                    <span>Programming languages &</span>
                    <span>Libraries</span>
                    <span>
                        C/C++ for programming
                        <br />
                        Mostly React js for frontend development
                        <br />
                        CSS for Styling
                        <br />
                        PHP & MySQL for backend development
                    </span>
                </div>
                <div className="s-right">
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt="C++" />
                    </div>
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="ReactJs" />
                    </div>
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" />
                    </div>
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" />
                    </div>
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" />
                    </div>
                    <div className="s-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;
