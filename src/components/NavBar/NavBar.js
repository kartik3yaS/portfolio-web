import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import 'animate.css';
    
const NavBar = () => {
    return(
        <nav className="Nav">
            <div className="n-left">
                <div className='n-name animate__animated animate__flip animate__slow'>ReactJs Developer</div>
            </div>
            <div className="n-right">
                <div className="n-items">
                    <ul>
                        <Link spy={true} smooth={true} to="intro" activeClass='activeClass'><li>Home</li></Link>
                        <Link spy={true} smooth={true} to="hobbies" activeClass='activeClass'><li>Hobbies</li></Link>
                        <Link spy={true} smooth={true} to="skills" activeClass='activeClass'><li>Skills</li></Link>
                        <Link spy={true} smooth={true} to="portfolio" activeClass='activeClass'><li>Portfolio</li></Link>
                    </ul>
                </div>
                <div className="n-contact">
                    <Link spy={true} to='contact' smooth={true}>
                    <button className="button n-button">Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;