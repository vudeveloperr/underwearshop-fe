import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import ReactDOM from 'react-dom';
// import InputRange from 'react-input-range'
import PriceRange from '../components/PriceRange';
import axios from 'axios';

import MainContent from "../components/MainContent";


export default class ShopScreen extends Component {
    state = {
        mers: [],
        nums: Number,
        now : Number
    };

    componentDidMount() {
        axios
            .get("https://unterwasche-api.herokuapp.com/api/merchandise" + this.props.location.search)
            .then(data => {
                console.log(data.data.data);
                this.setState({ mers: data.data.data });
                console.log(this.state);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                {/* {this.state.images.length > 0 ? 
                    <Product img={this.state.images[0]}/> : ""} */}
                <h2>Filter by</h2>
                <div className="row">
                    <div className="filter col-2">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Collection
                                    </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" class={`collapse ${!window.location.search || window.location.search.indexOf('types=') > -1 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <ul class="list-filter">
                                            <li><a href="/shop">All</a></li>
                                            <li><a href="/shop?types=Boy Short">Boy Shorts</a></li>
                                            <li><a href="/shop?types=Hipster">Hipsters</a></li>
                                            <li><a href="/shop?types=Seamless Panties">Seamless Panties</a></li>
                                            <li><a href="/shop?types=String Bikini">String Bikini</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Price
                                    </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class={`collapse ${window.location.search.indexOf('minPrice=') > -1 ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <PriceRange price={this.props.location.search} />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Size
                                    </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" class={`collapse ${window.location.search.indexOf('size=') > -1 ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <ul class="list-filter">
                                            <li><a href="/shop?size=S">S</a></li>
                                            <li><a href="/shop?size=M">M</a></li>
                                            <li><a href="/shop?size=L">L</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Color
                                    </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" class={`collapse ${window.location.search.indexOf('color=') > -1 ? 'show' : ''}`} aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <ul class="list-color">
                                            <li><a href="/shop?color=while">White</a></li>
                                            <li><a href="/shop?color=black">Black</a></li>
                                            <li><a href="/shop?color=blue">Blue</a></li>
                                            <li><a href="/shop?color=lightblue">Light Blue</a></li>
                                            <li><a href="/shop?color=pink">Pink</a></li>
                                            <li><a href="/shop?color=lightpink">Light Pink</a></li>
                                            <li><a href="/shop?color=grey">Grey</a></li>
                                            <li><a href="/shop?color=brown">Brown</a></li>
                                            <li><a href="/shop?color=violetpink">Violet Pink</a></li>
                                            <li><a href="/shop?color=violet">Violet</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <MainContent mer={this.state.mers} />
                    </div>
                    <div className="container text-center col-3">
                        <ul className="pagination ">
                            <li class="page-item"><a class="page-link" href="/shop?page=1" >1</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=2">2</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=3">3</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=4">4</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=5">5</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=6">6</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=7">7</a></li>
                            <li class="page-item"><a class="page-link" href="/shop?page=8">8</a></li>

                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
