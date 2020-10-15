import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class AboutScreen extends Component {
    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row">
                    <div className="col-1"></div>
                    <div className="container col-7 about">
                        <h1>ABOUT</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add
                            your own content and make changes to the font. Feel free to
                            drag and drop me anywhere you like on your page.
                            I’m a great place for you to tell a story and let your users
                            know a little more about you.
                            This is a great space to write long text about your company
                            and your services. You can use this space to go into a little
                            more detail about your company. Talk about your team and what
                            services you provide. Tell your visitors the story of how you
                            came up with the idea for your business and what makes you
                            different from your competitors. Make your company stand out
                            and show your visitors who you are.
                    </p>
                    </div>

                    <div className="col-3">
                        <img src="https://www.talkbeauty.vn/public/assets/article_dir/2019/06/hana-giang-anh-4.jpg" class="img-fluid" alt="img" />
                    </div>
                    <div className="col-1"></div>
                </div>

                <Footer />
            </div>
        )
    }
}
