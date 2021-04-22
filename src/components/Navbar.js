// import { logDOM } from "@testing-library/dom";
import React from "react";
// import myLogo from "../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navBack fixed-top">
            <div className="container">
                {/* <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="logo..." /></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-80} className="nav-link" href="#">About us<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about_me" offset={-80} className="nav-link" href="#">Seating arrangement</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="education" offset={-80} className="nav-link" href="#">Plans</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="projects" offset={-80} className="nav-link" href="#">testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-80} className="nav-link" href="#">Contact us</Link>
                        </li>
                    </ul>
                    
                        <button class="nav-item ml-auto btn btn-outline my-2 my-sm-0 signInBtn" type="submit">Sign In</button>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
