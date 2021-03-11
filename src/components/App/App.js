import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Home from '../Home/Home';
import InfoPage from '../InfoPage/InfoPage';
import Vendors from '../Vendors/Vendors';
import Contact from '../Contact/Contact';
import OM from '../Vendors/OM/OM.js';
import Coriander from '../Vendors/Coriander/Coriander.js';
// import StandUp from '../Vendors/StandUp/StandUp.js';
import Invincible from '../Vendors/Invincible/Invincible.js';
import AFRA from '../Vendors/AFRA/AFRA.js';
import {Chat} from 'react-chat-popup';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message through the backend API
  }

  render() {
    return (
      <Router>
        {/* <Chat
          handleNewUserMessage={this.handleNewUserMessage}
        /> */}
        <div>
          <Nav />
          <Switch>
            <Route
              exact path="/about"
              component={About}
            />
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              exact path="/info"
              component={InfoPage}
            />
            <Route
              exact path="/vendors"
              component={Vendors}
            />
            <Route
              exact path="/vendors/om"
              component={OM}
            />
            <Route
              exact path="/vendors/coriander"
              component={Coriander}
            />
            {/* <Route
              exact path="/vendors/standup"
              component={StandUp}
            /> */}
            <Route
              exact path="/vendors/invincible"
              component={Invincible}
            />
            <Route
              exact path="/vendors/afra"
              component={AFRA}
            />
            <Route
              exact path="/contact"
              component={Contact}
            />

            {/* If none of the other routes matched, show a 404. */}
            <Route render={() => <><h1 style={{textAlign: "center"}}>Error 404</h1><h2 style={{textAlign: "center"}}>This page does not exist</h2></>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
