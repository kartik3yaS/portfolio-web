import React from 'react';
import './Contact.css';
import locationIcon from '../../Images/location_icon.jpg';
import mailIcon from '../../Images/mail_icon.png';

const Contact = () => {
    return (
        <div className="contact-section" id='contact'>
            <h2>CONTACT</h2>
            <p>Don't be shy! Hit me up! <span className="emoji">👇</span></p>
            <div className="contact-info">
                <div className="contact-item">
                    <div className="icon">
                        <img src={locationIcon} alt="Location Icon" />
                    </div>
                    <div className="details">
                        <h3>Location</h3>
                        <p>Kanpur, Uttar Pradesh</p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <img src={mailIcon} alt="Mail Icon" />
                    </div>
                    <div className="details">
                        <h3>Mail</h3>
                        <p>kartikeyashukla009@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
