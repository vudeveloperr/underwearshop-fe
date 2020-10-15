import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {
    render() {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
                <MDBContainer fluid className="text-center ">
                    <MDBRow>
                    <MDBCol md="3">
                            <h5 className="unterwasche ">Unterwasche</h5>
                            <ul>
                                <li className="list-unstyled link">
                                    <span><a href="/">Home</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span><a href="/shop">Shop</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span><a href="/about">About</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span><a href="/contact">Contact</a></span>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="explore">Explore</h5>
                            <ul>
                                <li className="list-unstyled link">
                                    <span><a href="/#">FAQ</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span> <a href="/shipping-returns">Shipping & Returns</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span> <a href="/store-policy">Store Policy</a></span>
                                </li>
                                <li className="list-unstyled">
                                    <span>Payment Methods</span>
                                </li>
                                
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="newletter">Join our Newsletter</h5>
                                <div >
                                    <input type="email" id="materialFormCardEmailEx" class="form-control" placeholder="Enter your email here*"/>
                                    <button class="btn btn-secondary" type="submit">Subscribe Now</button>
                                </div>
                            </MDBCol>
                        <MDBCol md="3">
                            <h5 className="follow">Follow Us</h5>
                            <ul>
                                <li className="list-unstyled link">
                                    <span><a href="https://www.instagram.com/p/B5hcecjA-BP/">Facebook</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span><a href="https://www.instagram.com/p/B7KraqtgLff/">Instagram</a></span>
                                </li>
                                <li className="list-unstyled link">
                                    <span><a href="https://www.instagram.com/p/B5yo4k1gz8T/">Twitter</a></span>
                                </li>
                                <li className="list-unstyled link">
                                <span><a href="https://www.instagram.com/p/B5scaHfgS8U/">Pinterest</a></span>
                                </li>
                                
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} : <a href="/"> Unterwasche </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        )
    }
}
