import React, { Component } from 'react'

export default class InfoProduct extends Component {
    render() {
        return (
            <div className="info text-center">
                <h4>{this.props.inf.name} {this.props.inf.color}</h4>
                <p>{this.props.inf.price} đ</p>
            </div>
        )
    }
}
