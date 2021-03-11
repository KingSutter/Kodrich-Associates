import React from 'react';
import axios from 'axios';
import './Contact.css';
// import {MicRecorder} from 'mic-recorder-to-mp3';
const MicRecorder = require('mic-recorder-to-mp3');

const Mp3Recorder = new MicRecorder({bitrate: 128});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    }
  }
  
  // Mp3Recorder = new MicRecorder({bitrate: 128});

  // handleSubmit(e) {
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3002/send",
  //     data: this.state
  //   }).then((response) => {
  //     if (response.data.status === 'success') {
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if (response.data.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // }

  // Asks user for microphone permission
  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  // Start recording
  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  // On stoppping the recording
  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  resetForm() {

    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <div className="Contact-page">
        <div className="page-header">
          <h2>Contact Us</h2>
          <p>Please feel free to contact us at any time and we'll do our best to get back to you as soon as possible during normal business hours.</p>
        </div>
        <div className="flex-container">
          <div className="form-container">
            <form id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {/* record button */}
              <button onClick={this.start} disabled={this.state.isRecording}>
                Record
              </button>
              <button onClick={this.stop} disabled={!this.state.isRecording}>
                Stop
              </button>
              <audio src={this.state.blobURL} controls="controls" />
            </form>
          </div>
          <div className="info-container">
            <h4>Our address:</h4><br/>
            {/* Interactive map below, remove the comment code and brackets to reactivate it */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.7114898087175!2d-93.46421218424635!3d44.929202377001765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f61e357c38818f%3A0x5b0e059e915bb0fe!2s14333%20Oakwood%20Rd%2C%20Minnetonka%2C%20MN%2055345!5e0!3m2!1sen!2sus!4v1601166390742!5m2!1sen!2sus" 
              width="400" 
              height="300" 
              frameborder="0" 
              style={{border:"0;"}} 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0">
            </iframe>
            <br/> */}
            <a href="https://goo.gl/maps/wdAusCJoAjLz9pRT8" target="_blank" rel="noopener noreferrer">14333 Oakwood Road<br/>Minnetonka, MN 55345</a>
            <br/><br/>
            <b>Phone: </b><a href="tel:6127162352">612-716-2352 </a>
            <br/><br/>
            <b>Email: </b><a href="mailto:kodrich@hotmail.com">kodrich@hotmail.com</a><br/><br/>
            <b>Hours: </b>
            <div>Monday to Friday, 9am - 5pm</div>
          </div>
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div >
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;