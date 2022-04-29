import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt="" style={{width:'100%'}}/>
          <div className="f-content">
              <span>bariscandemirel35@gmail.com</span>
              <div className="f-icons">
                  <FaGithub color='white' size='3rem'/>
                  <FaInstagram color='white' size='3rem'/>
                  <FaLinkedin color='white' size='3rem'/>
              </div>
          </div>
      </div>
  )
}

export default Footer