import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import axios from "axios";

export default class ContactScreen extends Component {

    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row">
                    <div className="container col-4 contact text-center">
                        <h1> CONTACT </h1>
                        <p>
                            VISIT OUR STORE
                        </p>
                        <p>
                            Address: 500 Terry Francois Street
                            San Francisco, CA 94158
                            Phone: 123-456-7890
                            Email:  info@my-domain.com
                        </p>
                        <p>STOCKISTS</p>
                        <p>
                            Store 1
                            500 Terry Francois Street
                            San Francisco, CA 94158
                            Tel: 123-456-7890
                        </p>
                        <p>
                            Store 2
                            500 Terry Francois Street
                            San Francisco, CA 94158
                            Tel: 123-456-7890
                        </p>
                        <p>
                            Store 3
                            500 Terry Francois Street
                            San Francisco, CA 94158
                            Tel: 123-456-7890
                            </p>
                        <p>
                            Store 4
                            500 Terry Francois Street
                            San Francisco, CA 94158
                            ​Tel: 123-456-7890
                        </p>
                    </div>

                    <div className="col-8">
                        <img className="imageConta" alt="cai gi day" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-fw19-evergreen-clp-crm-desktop_tcm221-328877.jpg"/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
