import React from 'react'
import "./Toggle.css"
import{BiSun} from "react-icons/bi"
import{BiMoon} from "react-icons/bi"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = ()=>{
        theme.dispatch({type:'toggle'})
        console.log(darkMode);
    }

  return (
      <div className="toggle" onClick={handleClick}>
          <BiSun></BiSun>
          <BiMoon></BiMoon>
          <div className="t-button" style={darkMode?{ left:'2px'}:{right:'2px'}}>

          </div>
      </div>
  )
}

export default Toggle