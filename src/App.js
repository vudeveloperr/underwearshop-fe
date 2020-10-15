import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./containers/HomeScreen";
import LoginScreen from "./containers/LoginScreen";
import AboutScreen from "./containers/AboutScreen";
import ContactScreen from "./containers/ContactScreen";
import ShopScreen from "./containers/ShopScreen";
import CartScreen from "./containers/CartScreen";
import DetailScreen from "./containers/DetailScreen";
import AdminScreen from "./containers/AdminScreen";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import axios from "./axios";
import ShipReturn from './containers/ShipReturn';
import StorePolicyScreen from './containers/StorePolicyScreen';
import SignUpScreen from './containers/SignUpScreen';

export class App extends Component {
  state = {
    username: '',
    id: '',  
  };

  componentDidMount() {
    //check login
    const access_token = window.localStorage.getItem("access_token")
    axios.get("https://unterwasche-api.herokuapp.com/api/auth/check?access_token="+access_token)
      .then(response => {
        if(response.data.success){
          this.setState({
            username: response.data.user.username,
            id: response.data.user.id
          });
        }else {
          this.props.history.push("/login")
        }
      }).catch(error =>{
        console.log(error)
      })
  }

  _onLogin = (username, password) => {
    axios
      .post("https://unterwasche-api.herokuapp.com/api/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
        if(response.data.success){
          window.localStorage.setItem("access_token", response.data.access_token)
          this.setState({
            username: response.data.user.username,
            id: response.data.id
          });
          this.props.history.push("/");
        }
        else {
          alert(response.data.message);
        }
      })
      .catch(err => console.error(err));
  };

  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return <HomeScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
                
              }}
            />
            <Route path="/login"
              render={props => {
                if (this.state.username) {
                  props.history.push("/");
                  return "";
                }
                return <LoginScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
            <Route path="/signup" render={props =>{
              return <SignUpScreen
              {...props}
              username={this.state.username}
              onLogin={this._onLogin}
              />
            }}/>

            <Route
              exact
              path="/about"
              render={props => {
                return <AboutScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/shipping-returns"
              render={props => {
                return <ShipReturn
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/store-policy"
              render={props => {
                return <StorePolicyScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/contact"
              render={props => {
                return <ContactScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact
              path="/shop"
              render={props => {
                
                return <ShopScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route
              exact path="/cart"
              render={props => {
                
                return <CartScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
              }}
            />
            <Route exact path="/merchandise/:merId"
              render={props => { return <DetailScreen {...props} 
                username={this.state.username}
                onLogin={this._onLogin}
              />; }}
            />
            <Route
              exact
              path="/admin"
              render={props => {
                
                return <AdminScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                 />; }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
