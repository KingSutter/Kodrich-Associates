import React from 'react';
import axios from 'axios';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
// import dotenv from 'dotenv';

const dotenv = require('dotenv').config();

const MicRecorder = require('mic-recorder-to-mp3');
const Mp3Recorder = new MicRecorder({bitrate: 128});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00acb0',
      main: '#00acb0',
      dark: '#008183',
      contrastText: '#fff',
    },
  }
});

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
  
  handleSubmit() {
    // Sends email to Kodrich Associates ... then resets form'
    this.resetForm();
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

  cancel = () => {
    this.setState({isRecording: false });
    Mp3Recorder
      .stop()
  }
  // On stoppping the recording ... send voice recording to API and insert into message box
  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        // begin file upload to API
        var data = blob;

        var config = {
          method: 'post',
          url: 'https://api.assemblyai.com/v2/upload',
          headers: { 
            'Transfer-Encoding': 'chunked', 
            'Authorization': `Bearer [KEY HERE]`, // add in API key client-side, this is public at the moment
            'Content-Type': 'audio/mpeg', 
          },
          data : data
        };

        axios(config)
        .then((response) => {
          console.log("Upload URL " + response.data.upload_url);
          // Request uploaded audio file for transcription to API
          console.log("first request complete, starting second...");
          var data = JSON.stringify({"audio_src_url":response.data.upload_url});

          var config = {
            method: 'post',
            url: 'https://api.assemblyai.com/transcript',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': 'Bearer [KEY HERE]', // add in API key client-side, this is public at the moment
            },
            data : data
          };

          axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log("second request complete, starting third");
            // Request trascribed audio from API after 15 seconds
            setTimeout(() => {;
              var config = {
                method: 'get',
                url: `https://api.assemblyai.com/transcript/${response.data.transcript.id}`,
                headers: { 
                  'Authorization': 'Bearer [KEY HERE]', // add in API key client-side, this is public at the moment
                }
              };

              axios(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                //only if the request returns a completed transcription will the message change
                if (response.data.transcript.text != null){
                this.setState({message: this.state.message + response.data.transcript.text})
              }
              })
              .catch(function (error) {
                console.log(error);
              });

            }, 20000);
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

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
  
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
          {/* Google Maps embed and contact information */}
          <div className="info-container">
              <h4>Our address:</h4><br/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.7114898087175!2d-93.46421218424635!3d44.929202377001765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f61e357c38818f%3A0x5b0e059e915bb0fe!2s14333%20Oakwood%20Rd%2C%20Minnetonka%2C%20MN%2055345!5e0!3m2!1sen!2sus!4v1601166390742!5m2!1sen!2sus" 
                width="400" 
                height="300" 
                frameborder="0" 
                style={{border:"0;"}} 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0">
              </iframe>
              <br/>
              <a href="https://goo.gl/maps/wdAusCJoAjLz9pRT8" target="_blank" rel="noopener noreferrer">14333 Oakwood Road<br/>Minnetonka, MN 55345</a>
              <br/><br/>
              <b>Phone: </b><a href="tel:6127162352">612-716-2352 </a>
              <br/><br/>
              <b>Email: </b><a href="mailto:kodrich@hotmail.com">kodrich@hotmail.com</a><br/><br/>
              <b>Hours: </b>
              <div>Monday to Friday, 9am - 5pm</div>
            </div>
          {/* Form for sending an email */}
          <ThemeProvider theme={theme}> 
            <div className="form-container">
                <h4>Send us a message:</h4>
                <div className="form-group">
                  <TextField
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue="Hello World"
                    placeholder="John/Jane Doe"
                    variant="filled"
                    value={this.state.name} onChange={this.onNameChange.bind(this)}
                    fullWidth={true}
                  />
                </div>
                <div className="form-group">
                <TextField
                    required
                    id="filled-required"
                    label="Email"
                    required
                    defaultValue="Hello World"
                    placeholder="example@gmail.com"
                    variant="filled"
                    value={this.state.email} onChange={this.onEmailChange.bind(this)}
                    fullWidth={true}
                  />
                </div>
                <div className="form-group">
                    <TextField
                    id="filled-multiline-flexible"
                    label="Message"
                    multiline
                    required
                    rows={5}
                    rowsMax={7}
                    variant="filled"
                    fullWidth={true}
                    value={this.state.message} 
                    onChange={this.onMessageChange.bind(this)}
                    />
                </div>
                {/* record button */}
                  <Button className="record-buttons" onClick={this.start} disabled={this.state.isRecording} variant="contained" color="primary" startIcon={<KeyboardVoiceIcon />}>
                    Record
                  </Button>
                  <Button className="record-buttons" onClick={this.cancel} disabled={!this.state.isRecording} variant="contained" color="primary" startIcon={<CancelIcon />}>Cancel</Button>
                  {/* stop button */}
                  <br/><br/>
                  <Button className="record-buttons" onClick={this.stop} disabled={!this.state.isRecording} variant="contained" color="primary" startIcon={<SaveIcon />}>
                    Transcribe
                  </Button><br/><br/>
                  <Button type="submit" variant="contained" color="primary" onClick={()=>this.handleSubmit() } startIcon={<SendIcon />}>Send</Button>
                
                {/* The commented out code below shows the recorded audio file. Will save for later if needed */}
                {/* <audio src={this.state.blobURL} controls="controls" /> */}
            </div>
          </ThemeProvider>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div >
    );
  }
}

export default Contact;