import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {themeContext} from '../../Context';
import { useContext } from 'react';
import {motion} from "framer-motion";

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="works">
          <div className="awesome">
              <span style={{color: darkMode?'white':''}}>Work for All These</span>
              <span>Brands & Clients</span>
              <span>
              Lorem ipsum simpley dummy  text of  bla bla
              <br />
              Lorem ipsum simpley dummy  text of  bla bla
              <br />
              Lorem ipsum simpley dummy  text of  bla bla
              <br />
              Lorem ipsum simpley dummy  text of  bla bla
              </span>
              <button className='button s-button'>Hire me</button>
              <div className='blur s-blur2' style={{background: "#ABF1FF94"}}></div>
          </div>

          <div className="w-right">
              <motion.div 
              initial={{rotate: 45}}
              whileInView={{rotate: 0}}
              viewport={{margin:'40px'}}
              transition={{duration: 3.5, type: 'spring'}}
              className="w-maincircle">
                  <div className="w-seccircle">
                      <img src={Upwork} alt="" />
                  </div>

                  <div className="w-seccircle">
                      <img src={Fiverr} alt="" />
                  </div>

                  <div className="w-seccircle">
                      <img src={Amazon} alt="" />
                  </div>

                  <div className="w-seccircle">
                      <img src={Facebook} alt="" />
                  </div>

                  <div className="w-seccircle">
                      <img src={Shopify} alt="" />
                  </div>
              </motion.div>
              <div className="w-backcircle bluecircle"></div>
              <div className="w-backcircle yellowcircle"></div>
          </div>
      </div>
  )
}

export default Works