import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Shop extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="col-4 link">
                    <Link className="link-color" to="/shop">
                        SHOP
                    </Link>
                    
                </div>
                
            </div>
        )
    }
}
