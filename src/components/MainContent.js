import React, { Component } from 'react';
import Product from "./Product";
import InfoProduct from "./InfoProduct";
import {Link} from "react-router-dom";

export default class MainContent extends Component {

    render() {

        const allMerchandises = this.props.mer.map(img => 
            (
               <div key={img._id} className="col-3 link">
                   <Link to={`/merchandise/${img._id}`}>
                        <Product  img={img}/>
                        <InfoProduct inf={img}/>
                   </Link>
                    
               </div>
            ));
        
        return (
            <div className="container">
                <div className="row">
                    {allMerchandises}
                </div>
            </div>
        )
    }
}
