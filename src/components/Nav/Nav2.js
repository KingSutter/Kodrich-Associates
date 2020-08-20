import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import './Nav.css';
import { render } from 'react-dom';



class Nav extends Component {
  state = {
    anchorEl: null,
    open: false,
  }

  handleOpen = event => {
    event.preventDefault();
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    event.preventDefault();
    this.setState({open: false, anchorEl: event.currentTarget});
  }

  render() {
    return (
      <div className="nav">
      <Link to="/">
        <h2 className="nav-title">Kodrich Associates</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to="/">
          Home
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/vendors">
          Vendors
        </Link>
        <Link 
          aria-controls="simple-menu" 
          className="nav-link" to="/vendors"
          aria-haspopup="true" 
          onOpen={(event)=>this.handleOpen}
          onMouseOver={this.handleOpen}
          // onMouseLeave={this.handleClose}
          >
          Vendors ⇂
        </Link>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          keepMounted
          onRequestClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
    );
  }
}

export default Nav;
