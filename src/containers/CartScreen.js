import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
//import axios from "axios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class CartScreen extends Component {
    state={
        items : {}
    }

    componentDidMount(){
        const name = localStorage.getItem("name");
        const id = localStorage.getItem("id");
        const image = localStorage.getItem("image");
        const size = localStorage.getItem("size");
        const quantity = localStorage.getItem("quantity");
        const price = localStorage.getItem("price");
        const subtotal = localStorage.getItem("subtotal");
        this.setState({name, id, image, size, quantity, price, subtotal});
    }

    delete = (event) => {
        event.preventDefault();
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('image');
        localStorage.removeItem('size');
        localStorage.removeItem('quantity');
        localStorage.removeItem('price');
        localStorage.removeItem('subtotal');
        
    }

    render() {
       
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 text-center">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">MY CART</th>
                                    <th scope="col">Size </th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price </th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="col"><img className= "cart-img" alt=""
                                        src={this.state.image ? this.state.image : ""} /></th>
                                    <th scope="col">{this.state.size ? this.state.size : ""}</th>
                                    <th scope="col">{this.state.quantity ? this.state.quantity : ""}</th>
                                    <th scope="col">{this.state.price ? this.state.price : ""} </th>
                                    <th scope="col">{this.state.subtotal ? this.state.subtotal : ""}</th>
                                    <button onClick={this.delete} type="submit" className="btn btn-secondary btn-sm">Delete</button>
                                </tr>
                            </tbody>
                            <p>{this.state.name ? this.state.name : ""}</p>
                        </table>
                    </div>
                </div>
                <div className="text-center">
                    <PayPalButton
                        amount="100"
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID
                                })
                            });
                        }}
                    />
                </div>

                <Footer />
            </div>
        )
    }
}
