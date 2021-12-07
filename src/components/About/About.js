import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <h2>Our Team</h2>
    <p>We are dedicated to provide you with product knowledge, hands on assistance, customer service, demos and quality manufacturers.  Our goal is to “Make doing Business Easy”.</p>
    <br />
    <table>
      <tr>
        <td><img src="img/Lucy.jpg" alt="Lucy Rogness profile photo"/></td>
        <td>
          <p>Lucy Rogness</p>
          <p style={{fontStyle:"italic"}}>Owner</p>
          <p>Working as a Manufacturer’s Representative for over 25 years.</p>
        </td>
      </tr>
      <tr>
        <td><img src="img/Cassie.jpg" alt="Cassie Bohmbach profile photo"/></td>
        <td>
          <p>Cassie Bohmbach</p>
          <p>Joined Kodrich Associates, Inc. in 2019.</p>
        </td>
      </tr>

    </table>
  </div>
);

export default About;