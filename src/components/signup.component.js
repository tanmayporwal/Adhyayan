import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }
    
    inputChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    signuphandler = (e) => {
        e.preventDefault();
        const {first_name, last_name, email, password} = this.state
        const user = {
            first_name, 
            last_name,
            email,
            password
        }

        axios
        .post('http://127.0.0.1:3001/user', user)
        .then((res) => console.log(res))
        .catch(err => {
            console.error(err);
        });

        alert("hello")
    }


    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={this.signuphandler}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h3 className="modal-title">Sign up</h3>
                        </div>

                        <div className="form-group">
                            <label>First name</label>
                            <input name="first_name" type="text" onChange={this.inputChangeHandler} className="form-control fname" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" name="last_name" onChange={this.inputChangeHandler} className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" onChange={this.inputChangeHandler} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.inputChangeHandler} className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block signupSubmitBtn">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}