import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import footer from "../../Images/footer_img.png";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <img src={footer} alt="" style={{width: '100%', color: "#1E90FF"}} />
            <div className="f-content">
                <div className="f-icons">
                    <a href="https://github.com/kartik3yaS" target="_blank">
                        <Github color="white" size="4rem" />
                    </a>
                    <a href="https://www.instagram.com/kartikeya.22/?hl=en" target="_blank">
                        <Insta color="white" size="4rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/kartikeya-shukla-63b433250/" target="_blank">
                        <Linkedin color="white" size="4rem" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;