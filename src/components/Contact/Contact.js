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
        <div className="flex-container">
          <div className="form-container">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
            </form>
          </div>
          <div className="info-container">
            <h4>Our address:</h4>
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
            <br/>
            <b>Phone: </b><a href="tel:6127162352">612-716-2352 </a>
            <br/>
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