import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Grid from '@material-ui/core/Grid';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import {withRouter} from 'react-router-dom';

class UserPage extends Component {
  handleImageClick = (vendor) => {
    this.props.history.push({
      pathname: `/vendors/${vendor}`
    })
  }

  render() {
    return (
      <div>
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src="img/coriander1.jpg" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src="img/coriander2.jpg" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src="img/coriander3.jpg" />
              </div>
            </div>
        </Fade>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className = "grid-item"
          >
          <div className = "logo-container">
            <img className="companyLogo" onClick={()=>this.handleImageClick("coriander")} src="img/Coriander-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("om")} src="img/om-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("standup")} src="img/Standup-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("invincible")} src="img/Invincible-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("afra")} src="img/Afra-logo.png"/>
          </div>
        </Grid>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default withRouter(UserPage);