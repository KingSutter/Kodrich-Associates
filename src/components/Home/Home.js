import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import {withRouter} from 'react-router-dom';


const fadeImages = [
  'img/home4.jpeg',
  'img/home5.jpeg',
  'img/home6.jpeg',
  'img/home.jpg',
  'img/home2.jpg',
  'img/home3.jpg',
  'img/home7.jpg',
  'img/home8.jpg',
  'img/home9.jpg',
  'img/home10.jpg',
  'img/home11.jpg',
  'img/home12.jpg',
  'img/home13.jpg',
  'img/home14.jpg',
  'img/home15.jpg',
  'img/home16.jpg',
  'img/home17.jpg',
  'img/home18.jpg',
  'img/home19.jpg',
  'img/home20.jpg',
  'img/home21.jpg',
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
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[3]} alt="slide image 4"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[4]} alt="slide image 5" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[5]} alt="slide image 6" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[6]} alt="slide image 7"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[7]} alt="slide image 8" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[8]} alt="slide image 9" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[9]} alt="slide image 10"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[10]} alt="slide image 11" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[11]} alt="slide image 12" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[12]} alt="slide image 13"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[13]} alt="slide image 14" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[14]} alt="slide image 15" />
              </div>
            </div><div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[15]} alt="slide image 16"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[16]} alt="slide image 17" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[17]} alt="slide image 18" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[18]} alt="slide image 19"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[19]} alt="slide image 20" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[20]} alt="slide image 21" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[21]} alt="slide image 22" />
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