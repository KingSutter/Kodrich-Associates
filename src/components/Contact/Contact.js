import React from 'react';
import axios from 'axios';
import './Contact.css';

// still in development for a safe option

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
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
          <div className="info-container">
            <h4>Our address:</h4><br/>
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