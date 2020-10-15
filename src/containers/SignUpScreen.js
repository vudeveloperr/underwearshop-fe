import React, { Component } from 'react'

import axios from "../axios";

export default class SignUpScreen extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })

    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {
            username, password, email
        } = this.state;
        axios
            .post("http://localhost:6969/api/user/signup", {
                    username: username,
                    email: email,
                    password: password
            })
            .then(response => {
                console.log("registration",response);
                this.props.history.push("/login");
            })
            .catch(err => console.error(err));

    }

    render() {
        return (
            <div className="body">
                <div className="all">
                    <form onSubmit={this.handleSubmit}>
                        <div className="imgcontainer">
                            <img src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/74659552_669771613553697_7393115195974417701_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Ad3llgLo2_gAX9g4mFl&oh=c2d391e5046467da7ef53523a6ad5cee&oe=5E94E652" alt="Avatar" className="avatar" />
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                        </div>

                        <div className="container">

                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="username" type="text" placeholder="username" required />
                            </div>

                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="email" type="text" placeholder="email" required />
                            </div>

                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="password" type="password" placeholder="password" required />
                            </div>

                        </div>

                        <div className="text-center">
                            <button className="btn btn-danger" type="submit">Sign Up</button>
                        </div>

                        {/* <label> <input type="checkbox" checked="checked" name="remember"/> Remember me </label> */}
                    </form>
                </div>
            </div>
        )
    }
}
