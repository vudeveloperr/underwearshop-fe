import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";


class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        console.log(this.state);
        return (
            <div className ="body" >
                <div className="all">
                    <form onSubmit = { this.handleSubmit}>
                        <div className="imgcontainer">
                            <img src="https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.2.1440.1440a/s640x640/75304581_442855213098634_3506143733081050171_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=XfV8xb347pQAX8mBUz3&oh=fd83d00164af455c59774de2d62fac9f&oe=5E93FBC2" alt="Avatar" className="avatar"/>
                        </div>

                        <div className = "container"> 
                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="username" type="text" placeholder="username" required/>
                            </div>

                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="password" type="password" placeholder="password" required/>
                            </div>
                        </div>
                        <div className="text-center text-danger" >
                            <Link to="/signup">
                                    Sign Up
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" type="submit">Login</button>
                        </div>
                        
                        {/* <label> <input type="checkbox" checked="checked" name="remember"/> Remember me </label> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginScreen;
