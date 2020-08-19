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
import AboutPage from '../AboutPage/AboutPage';
import Home from '../Home/Home';
import InfoPage from '../InfoPage/InfoPage';
import Vendors from '../Vendors/Vendors';
import Contact from '../Contact/Contact';
import OM from '../Vendors/OM/OM.js'
import Coriander from '../Vendors/Coriander/Coriander.js'
import StandUp from '../Vendors/StandUp/StandUp.js'
import Invincible from '../Vendors/Invincible/Invincible.js'

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
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact path="/home"
              component={Home}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
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
            <Route
              exact path="/vendors/standup"
              component={StandUp}
            />
            <Route
              exact path="/vendors/invincible"
              component={Invincible}
            />
            <Route
              exact path="/contact"
              component={Contact}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <><h1 style={{textAlign: "center"}}>Error 404</h1><h2 style={{textAlign: "center"}}>This page does not exist</h2></>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
