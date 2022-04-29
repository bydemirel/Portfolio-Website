import React from 'react'
import "./Services.css"
import HearthEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card"
import Resume from "./Resume.pdf"
import {themeContext} from '../../Context';
import { useContext } from 'react';
import {motion} from "framer-motion";

const Services = () => {

    const transition = {duration:1, type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="services" id='Services'>
                <div className="awesome">
                    <span style={{color:darkMode?'white':''}}>My Awesome</span>
                    <span>Services</span>
                    <br />
                    My main focuses are Web and Mobile Development,
                    <br />
                    also I am related with other languages.
                    <a href={Resume} download> 
                    <button className='button s-button' >Download CV</button>
                    </a>
                    <div className='blur s-blur1' style={{background: '#C1F5FF'}}></div>
                </div>
          
                <div className="cards">
                    <motion.div 
                     initial={{left:'25rem'}}
                     whileInView={{left:'14rem'}}
                     transition={transition}
                    style={{left:'14rem'}}>
                        <Card emoji={HearthEmoji} heading="Mobile Developer" detail="Flutter, Dart, Android, IOS"
                        >

                        </Card>
                    </motion.div>

                    <motion.div 
               initial={{left:'-15rem'}}
               whileInView={{left:'-4rem'}}
               transition={transition}
                    style={{top:'12rem',left:'-4rem'}}>
                        <Card emoji={Glasses} heading="Web Developer" detail="HTML,CSS, JavaScript, React, Vue, Node, Express, ASP.MVC"
                        >

                        </Card>
                    </motion.div>

                    <motion.div 
                 initial={{left:'25rem'}}
                 whileInView={{left:'12rem'}}
                 transition={transition}
                    style={{top:'19rem',left:'12rem'}}>
                        <Card emoji={Humble} heading="Other Languages" detail="Java, C, C++, Python, SQL"
                        >

                        </Card>
                    </motion.div>

                    <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
                </div>
      </div>
  )
}

export default Services