import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] =useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
        console.error("Please fill in all required fields.");
        return;
    }  

    emailjs.sendForm('service_4ff45x5', 'template_p8lia46', form.current, 'bhMXeIIPm79DMkQXS')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='contact'>
        <div className='c-left'>
            <span>Get in touch</span>
            <span>Contact me</span>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message' />
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
            </form>
        </div>
    </div>
  );
};

export default Contact;