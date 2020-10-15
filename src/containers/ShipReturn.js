import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default class ShipReturn extends Component {
    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row ">
                    <div className="col-3">
                        <div className="container ship1">
                            <h2 className="ship12">Shipping & Returns</h2>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="container ship2">
                            <h3 className="ship22"> Shipping Policy </h3>
                            <p className="ship23">
                                I’m a shipping policy section.
                                I’m a great place to update your customers about your shipping methods,
                                packaging and costs. Use plain, straightforward language to build trust
                                and make sure that your customers stay loyal!
                            </p>
                            <p className="ship23">
                                I'm the second paragraph in your shipping policy section. Click here to
                                add your own text and edit me. It’s easy. Just click “Edit Text” or
                                double click me to add details about your policy and make changes to the
                                font. I’m a great place for you to tell a story and let your users know
                                a little more about you.
                            </p>
                            <h3 className="ship22"> Return & Exchange Policy </h3>
                            <p className="ship23">
                                I’m a return policy section. I’m a great place to let your customers know
                                what to do in case they’ve changed their mind about their purchase, or if
                                 they’re dissatisfied with a product. Having a straightforward refund or
                                 exchange policy is a great way to build trust and reassure your customers
                                 that they can buy with confidence.
                            </p>
                            <p className="ship23">
                                I'm the second paragraph in your return & exchange policy. Click here to
                                add your own text and edit me. It’s easy. Just click “Edit Text” or
                                double click me to add details about your policy and make changes to
                                the font. I’m a great place for you to tell a story and let your users
                                know a little more about you.
                            </p>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}
