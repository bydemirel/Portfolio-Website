import React,{useRef,useState} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done,setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1baf5p6', 'template_60pii3p', form.current, 'user_ltXCvL0DhesRrHbhn7K42')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="contact-form" id='Contact'>
          <div className="C-left">
              <div className="awesome">
                  <span style={{color:darkMode?'white':''}}>Get in touch</span>
                  <span>Contact me</span>
                  <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
                  </div>
              </div>
          </div>

          <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                  <input required="true" type="text" name='user_name' className='user' placeholder='Name'/>
                  <input required="true" type="email" name='user_email' className='user' placeholder='Email'/>
                  <textarea name='message' className='user' placeholder='Message'></textarea>
                  <input type="submit" value='Send' className='button'/>
                  <span>{done && "Thanks for contacting me!"}</span>
                  <div className='blur c-blur1' style={{background:"#var(--purple)"}}></div>
              </form>
          </div>
      </div>
  )
}

export default Contact