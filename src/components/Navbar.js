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
            <nav className="navbar navbar-expand-md bg-light navbar-light navBack">

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#05386b" }} />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Seating Arrangement</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>

                    </ul>
                    <ul className="nav navbar-nav navbar-right signLink">
                        <li className="nav-item"><Link className="nav-link" to={"/sign-in"}><span className="glyphicon glyphicon-log-in"></span><button className="btn btn-outline my-2 my-sm-0 signInBtn ml-auto" data-toggle="modal" data-target="#myModal" type="button">Sign in</button></Link></li>
                        <li className="nav-item"><Link className="nav-link" to={"/sign-up"}><span className="glyphicon glyphicon-user"></span><button className="btn btn-outline my-2 my-sm-0 signUpBtn ml-auto" data-toggle="modal" data-target="#myModal" type="button">Sign up</button></Link></li>
                    </ul>
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
