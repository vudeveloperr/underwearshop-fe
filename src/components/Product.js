import React, { Component } from 'react';

//import config from '../config';

export default class Product extends Component {
    render() {

        return (
            <div className="info-img">
                <img className="img img-fluid" alt="cai gi day"
                    src={this.props.img.image}/>
            </div>
        )
    }
}
