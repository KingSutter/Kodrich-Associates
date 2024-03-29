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
import OM from '../Vendors/OM/OM.js'
import Invincible from '../Vendors/Invincible/Invincible.js'
import Zgo from '../Vendors/Zgo/Zgo.js'

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
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
              exact path="/vendors/invincible"
              component={Invincible}
            />
            <Route
              exact path="/vendors/zgo"
              component={Zgo}
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
