import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {

    const handleClick = () => {

    }
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Demirel</div>
        <Toggle></Toggle>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Intro"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
        <div className="btn-div">
          <button className="button" onClick={handleClick}>Contact</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
