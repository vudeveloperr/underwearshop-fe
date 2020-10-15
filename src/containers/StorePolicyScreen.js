import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class StorePolicyScreen extends Component {
    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row ">
                    <div className="col-3">
                        <div className="container StorePolicy1">
                            <h2 className="StorePolicy12">Store Policy</h2>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="container StorePolicy2">
                            <h3 className="StorePolicy22"> Customer Care </h3>
                            <p className="StorePolicy23">
                            I’m a customer care section. I’m a great place to write 
                            a long text about your company and your services, and, most importantly,
                             how to contact your store with queries. Writing a detailed customer care
                              policy is a great way to build trust and reassure your customers that 
                              they can buy with confidence.
                            </p>
                            <p className="StorePolicy23">
                                I'm the second paragraph in your shipping policy section. Click here to
                                add your own text and edit me. It’s easy. Just click “Edit Text” or
                                double click me to add details about your policy and make changes to the
                                font. I’m a great place for you to tell a story and let your users know
                                a little more about you.
                            </p>
                            <h3 className="StorePolicy22"> Privacy & Safety </h3>
                            <p className="StorePolicy23">
                            I’m a privacy & safety policy section. I’m a great place to inform your 
                            customers about how you use, store, and protect their personal information. 
                            Add details such as how you use third-party banking to verify payment, the
                             way you collect data or when will you contact users after their purchase
                              was completed successfully.
                            </p>
                            <p className="StorePolicy23">
                            Your user’s privacy is of the highest importance to your business, 
                            so take the time to write an accurate and detailed policy. Use straightforward
                             language to gain their trust and make sure they keep coming back to your site!
                            </p>
                            <h3 className="StorePolicy22"> Wholesale Inquiries </h3>
                            <p className="StorePolicy23">
                            I’m a wholesale inquiries section. I’m a great place to inform other retailers
                             about how they can sell your stunning products. Use plain language and give as 
                             much information as possible in order to promote your business and take it to the
                             next level!
                            </p>
                            <p className="StorePolicy23">
                                I'm the second paragraph in your return & exchange policy. Click here to
                                add your own text and edit me. It’s easy. Just click “Edit Text” or
                                double click me to add details about your policy and make changes to
                                the font. I’m a great place for you to tell a story and let your users
                                know a little more about you.
                            </p>
                            <h3 className="StorePolicy22" >Payment Methods </h3>
                            <p className="StorePolicy23">- Credit / Debit Cards</p>
                            <p className="StorePolicy23">- PAYPAL</p>
                            <p className="StorePolicy23">- Offline Payments</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
