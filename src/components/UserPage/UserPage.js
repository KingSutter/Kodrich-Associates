import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
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
      </div>
    );
  }
}

export default UserPage;
