// import { logDOM } from "@testing-library/dom";
import React from "react";
// import myLogo from "../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {Link} from "react-scroll";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";

const Navbar = () => {
    return (
        <Router>

            <nav className="navbar navbar-expand-lg navbar-light navBack fixed-top">
                <div className="container">
                    {/* <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="logo..." /></a> */}
                    <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#05386b" }} />
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
                        <ul className="navbar-nav navbar-right signButton">
                            {/* <li className="nav-item"> */}
                                <Link className="nav-link" to={"/sign-in"}><button className="btn btn-outline my-2 my-sm-0 signInBtn" data-toggle="modal" data-target="#myModal" type="button">Login</button></Link>
                            {/* </li> */}
                            {/* <li className="nav-item"> */}
                                <Link className="nav-link" to={"/sign-up"}><button className="btn btn-outline my-2 my-sm-0 signUpBtn" data-toggle="modal" data-target="#myModal" type="button">Sign up</button></Link>
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Navbar
