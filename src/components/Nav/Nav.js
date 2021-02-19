import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {withRouter} from 'react-router-dom';
import './Nav.css';



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
    this.setState({open: false});
    // if (vendor != null) this.props.history.push(`/vendors/${vendor}`);
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
        <Link 
          aria-controls="simple-menu" 
          className="nav-link" to="/vendors"
          aria-haspopup="true" 
          onOpen={(event)=>this.handleOpen}
          onMouseOver={this.handleOpen}
          MenuListProps={{ onMouseLeave: this.handleClose }}
          >
          Vendors ⇂
        </Link>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
          MenuListProps={{ onMouseLeave: this.handleClose }}
        >
          <MenuItem onClick={()=>this.props.history.push(`/vendors`)}>Vendors Overview</MenuItem>
          <MenuItem onClick={()=>this.props.history.push(`/vendors/coriander`)}>Coriander Designs</MenuItem>
          <MenuItem onClick={()=>this.props.history.push(`/vendors/om`)}>OM Seating</MenuItem>
          {/* <MenuItem onClick={()=>this.props.history.push(`/vendors/standup`)}>Stand Up Desking</MenuItem> */}
          <MenuItem onClick={()=>this.props.history.push(`/vendors/invincible`)}>Invincible Furniture</MenuItem>
          <MenuItem onClick={()=>this.props.history.push(`/vendors/afra`)}>AFRA Furniture</MenuItem>
        </Menu>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
    );
  }
}

export default withRouter(Nav);
