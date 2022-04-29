import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/ben.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji1 from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion';

const Intro = () => {
    
    const transition = {duration:2, type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span style={{color: darkMode ? 'white':''}}>Hi! I am</span>
                  <span>Barışcan Demirel</span>
                  <span>Frontend Developer with high level of experience in web designing and mobile development</span>
              </div>
              <button className='button i-button'>Hire Me</button>

              <div className='i-icons'>
                  <img src={Github} alt="" />
                  <img src={LinkedIn} alt="" />
                  <img 
                  src={Instagram} alt="" />
              </div>
          </div>
          <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={boy} alt="" />
              <motion.img 
              initial={{left:'-36%'}}
              whileInView={{left:'-24%'}}
              transition={transition}
              src={glassesimoji1} alt="" />
              <motion.div 
               initial={{top:'-4%',left:'74%'}}
               whileInView={{left:'68%'}}
               transition={transition}
              style={{top: '-4%', left: '68%'}}>
                  <FloatingDiv image={crown} text1='Web' text2='Developer'/>
              </motion.div>

              <motion.div 
               initial={{top:'18rem',left:'9rem'}}
               whileInView={{left:'0rem'}}
               transition={transition}
              style={{top: '18rem', left: '0rem'}}>
                  <FloatingDiv image={thumbup} text1='Best Design' text2='Award'></FloatingDiv>
              </motion.div>

              <div className='blur' style={{background: 'rgb(238 210 255)'}}>
              </div>

              <div className='blur' style={{background: '#C1F5FF',top:'17rem',width:'21rem',height: '11rem',left:'-9rem'}}></div>
          </div>
      </div>
  )
}

export default Intro