import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default class AdminScreen extends Component {
    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <Footer/>
            </div>
        )
    }
}

