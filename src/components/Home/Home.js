import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import {withRouter} from 'react-router-dom';


const fadeImages = [
  'img/home4.jpeg',
  'img/home5.jpeg',
  'img/home6.jpeg',
];

class UserPage extends Component {

  state = {
    timer: 0,
    // myRef = React.createRef()
  }
  handleImageClick = (vendor) => {
    this.props.history.push({
      pathname: `/vendors/${vendor}`
    })
  }
  
  
  render() {
    return (
      <div red={this.myRef}>
        <div className="slide-container">
          <Fade transitionDuration="500" duration="4000" pauseOnHover={false}>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} alt="slide image 1"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} alt="slide image 2" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} alt="slide image 3" />
              </div>
            </div>
          </Fade>
        </div>
        <div className="mission-statement">
        Dedicated to provide you with product knowledge, hands on assistance, customer service, demos and quality manufacturers. Our goal is to “Make doing business easy”.
        </div>
          <div className = "logo-container">
            <img className="companyLogo" onClick={()=>this.handleImageClick("coriander")} src="img/Coriander-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("om")} src="img/om-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("standup")} src="img/Standup-logo.png"/>
            <img className="companyLogo" onClick={()=>this.handleImageClick("invincible")} src="img/Invincible-logo.png"/>
            <img className="companyLogo" id="afraLogo" onClick={()=>this.handleImageClick("afra")} src="img/Afra-logo.png"/>
          </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

export default withRouter(UserPage);