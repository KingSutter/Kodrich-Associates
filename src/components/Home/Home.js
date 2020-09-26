import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Grid from '@material-ui/core/Grid';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import {withRouter} from 'react-router-dom';


const fadeImages = [
  'img/home4.jpeg',
  'img/home5.jpeg',
  'img/home6.jpeg',
];

// var time = 0;
// const timer = setInterval(() => {
//   if (time == 2){
//     time = 0;
//   }
//   else time++;
//   console.log(time);
// }, 1000);

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

  // componentDidMount = () => {
  //   setInterval(() => {
  //     let img1 = document.getElementById("slideshowImage1");
  //   let img2 = document.getElementById("slideshowImage2");
  //   let img3 = document.getElementById("slideshowImage3");
  //   while (1) {
  //     if (timer==0) {
  //       img1.setAttribute("display", "flex");
  //       img2.setAttribute("display", "none");
  //     }
  //     else if (timer == 1){
  //       img2.setAttribute("display", "flex");
  //       img3.setAttribute("display", "none");
  //     }
  //     else if (timer == 2){
  //       img3.setAttribute("display", "flex");
  //       img1.setAttribute("display", "none");

  //       ReactDOM.findDOMNode()
  //     }
  //   }
  //   }, 1000);
    

    
  // }

  // handleFade = () => {
    
  // }
  
  
  render() {
    return (
      <div red={this.myRef}>
        <div className="slide-container">
          <Fade>
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
        {/* <div className="slideshow">
          <img src={fadeImages[0]} alt="slideshow image" id="slideshowImage1" />
          <img src={fadeImages[1]} alt="slideshow image" id="slideshowImage2"/>
          <img src={fadeImages[2]} alt="slideshow image" id="slideshowImage3"/>
        </div> */}
        <div className="mission-statement">
        Dedicated to provide you with product knowledge, hands on assistance, customer service, demos and quality manufacturers. Our goal is to “Make doing Business Easy”.
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