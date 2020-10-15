import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import axios from '../axios'
import Footer from "../components/Footer";


export default class HomeScreen extends Component {
    state = {
        merchandises: []
    };

    componentDidMount() {
        axios
            .get("https://unterwasche-api.herokuapp.com/api/merchandise")
            .then(data => {
                console.log(data.data);
                this.setState({
                    merchandises: data.data
                });
            })
            .catch(err => console.error(err));
    }
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row">
                    <div className="col-4 shopping1">
                            <div className="shopping2">
                                <p className="shopping3" >
                                    Introducing Your
                                    New Workout Wardrobe
                                </p>

                                <a href="http://localhost:3000/shop">
                                    <button className="shopping4">
                                        Start Shopping
                                    </button>
                                </a>
                            </div>
                    </div>
                    <div className="col-8 " >
                        <img className="imgHome" alt="day la dau" src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A1TCY5XH41Q5NO/8808b61f-559d-4325-b18d-1624f1ca7c31._CR0,0,970,600_PT0_SX970__.jpg" />
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <div className="col-4" >
                        <a href="/about" >
                            <img className="images" alt="day la dau" src="https://i.imgur.com/ZpDBZOo.png" />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="/shop">
                            <img className="images" alt="day la dau" src="https://i.imgur.com/WnDxNJb.png" />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="/#">
                            <img className="images" alt="day la dau" src="https://i.imgur.com/Vy7uovF.png" />
                        </a>
                    </div>
                </div>
                <div className="text-center textHome">
                    <p>
                        LATEST ARRIVALS
                    </p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <a href="/merchandise/5da19bcdabf896145ac165ab">
                            <img className="images1" alt="day la dau" src="https://i.imgur.com/QOBfYbt.jpg" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5da19b88abf896145ac165a9">
                            <img className="images1" alt="day la dau" src="https://i.imgur.com/vtiaB0w.jpg" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5da19bf1abf896145ac165ac">
                            <img className="images1" alt="day la dau" src="https://i.imgur.com/jjbPhnf.jpg" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5da19ae5abf896145ac165a6">
                            <img className="images1" alt="day la dau" src="https://i.imgur.com/01GLjwL.jpg" />
                        </a>
                    </div>
                </div>
                <div className="text-center textHome2">
                    <p>FOLLOW US ON</p>
                    <p>INSTAGRAM</p>
                </div>
                <Footer />
            </div>
        )
    }
}
