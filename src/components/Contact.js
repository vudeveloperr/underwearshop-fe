import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-4 link">
                    <Link className="link-color" to="/contact">
                        CONTACT
                    </Link>
                </div>
                
            </div>
        )
    }
}
