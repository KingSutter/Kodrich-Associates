import React from 'react';
import axios from 'axios';
import './Contact.css';
import {FromControl} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
      convertedMessage: '',
    }
  }
  
  // Mp3Recorder = new MicRecorder({bitrate: 128});

  handleSubmit() {
    // Sends email to Kodrich Associates
  }

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

  // On stoppping the recording ... send voice recording to API and insert into message box
  stop = () => {
    var localThis = this;
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        var axios = require('axios');
        // begin file upload to API
        var data = blob;

        var config = {
          method: 'post',
          url: 'https://api.assemblyai.com/v2/upload',
          headers: { 
            'Transfer-Encoding': 'chunked', 
            'Authorization': 'Bearer 37875e2f19134f3daee66ff2e1286489', 
            'Content-Type': 'audio/mpeg', 
            'Cookie': 'AWSALB=mG+8uuCdN7mRVVTW735xCgH1rbSGtiP8ju8tEilPL4tFyeGsFXt3P4tvwg4/3ym0ZyFW4q+o408T96vXSLUWNcIrOxQIVyM9NirpCdsHg15oceV7uoVSYOTFocqM; AWSALBCORS=mG+8uuCdN7mRVVTW735xCgH1rbSGtiP8ju8tEilPL4tFyeGsFXt3P4tvwg4/3ym0ZyFW4q+o408T96vXSLUWNcIrOxQIVyM9NirpCdsHg15oceV7uoVSYOTFocqM'
          },
          data : data
        };

        axios(config)
        .then((response) => {
          console.log("Upload URL" + response.data.upload_url);
          // Request uploaded audio file for transcription to API
          console.log("first request complete, starting second...");
          var axios = require('axios');
          var data = JSON.stringify({"audio_src_url":response.data.upload_url});

          var config = {
            method: 'post',
            url: 'https://api.assemblyai.com/transcript',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': 'Bearer 37875e2f19134f3daee66ff2e1286489', 
              'Cookie': 'AWSALB=V2WSvQVYqQuAWvXofAdvM4DtvDAU3qPwjwqfDrEuxIKtiFjbGAtB8rq/1gkzdqopoxI147U13raNhKrfYrQkq2X1P4rorbp8bdpgd2Y88qExKGuHMvvmzbUdkpZy; AWSALBCORS=V2WSvQVYqQuAWvXofAdvM4DtvDAU3qPwjwqfDrEuxIKtiFjbGAtB8rq/1gkzdqopoxI147U13raNhKrfYrQkq2X1P4rorbp8bdpgd2Y88qExKGuHMvvmzbUdkpZy'
            },
            data : data
          };

          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log("second request complete, starting third");
            // Request trascribed audio from API
            setTimeout(() => {;
              var axios = require('axios');

              var config = {
                method: 'get',
                url: `https://api.assemblyai.com/transcript/${response.data.transcript.id}`,
                headers: { 
                  'Authorization': 'Bearer 37875e2f19134f3daee66ff2e1286489', 
                  'Cookie': 'AWSALB=7saooVq3NLCvJ5HIuMj7AjXuoojSENd+dybzQMCox0mSo2WSGVINjdnOPYYrnje5R/vLI31/XxCYWTybahObkNIrEtiq/FmY8GBvTfnqQOpQG2PT/MiJMubd/Dz7; AWSALBCORS=7saooVq3NLCvJ5HIuMj7AjXuoojSENd+dybzQMCox0mSo2WSGVINjdnOPYYrnje5R/vLI31/XxCYWTybahObkNIrEtiq/FmY8GBvTfnqQOpQG2PT/MiJMubd/Dz7'
                }
              };

              axios(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                localThis.setState({message: response.data.transcript.text})
              })
              .catch(function (error) {
                console.log(error);
              });

            }, 15000);
          })
          .catch(function (error) {
            console.log(error);
          });

        })
        .catch(function (error) {
          console.log(error);
        });
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
                <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  placeholder="Name"
                  variant="filled"
                />
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              {/* record button */}
              <button onClick={this.start} disabled={this.state.isRecording}>
                Record
              </button>
              <button onClick={this.stop} disabled={!this.state.isRecording}>
                Stop
              </button><br/><br/>
              <button type="submit" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
              {/* <audio src={this.state.blobURL} controls="controls" /> */}
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
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
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