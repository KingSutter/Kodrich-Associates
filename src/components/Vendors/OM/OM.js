import React, {Component} from 'react';
import '../VendorLandings.css';

class OM extends Component {
    render() {
        return (
            <div className="om-page" >
               
                <div className="mission-header">
                <a href="https://www.omseating.com/" target="_blank" rel="noopener noreferrer"><img src="img/om-logo.png" alt="OM company logo" style={{marginTop: "1%", marginLeft: "1%"}}/></a>
                    <p>
                    The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product.  
                    We are focused on delivering smart solutions to our customers wide range of needs.  
                    We stock many fabrics to offer our quick shipping on our products.  
                    Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.
                    </p></div>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/om5-active/" target="_blank" rel="noopener noreferrer">
                                <img src="img/OM5.jpg" alt="OM5 series preview" />
                                <br />
                                OM5 Active Series
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/truly/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Truly.jpeg" alt="Truly series preview" />
                                <br />
                                Truly Series
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/ginny/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Ginny.jpeg" alt="Ginny series preview" />
                                <br />
                                Ginny Series
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/yes-series/" target="_blank" rel="noopener noreferrer">
                                <img src="img/YESstools.jpg" alt="YES series stools preview" />
                                <br />
                                YES Series Stools
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/yes-series/" target="_blank" rel="noopener noreferrer">
                                <img src="img/YESchairs.jpeg" alt="YES series chairs preview" />
                                <br />
                                YES Series Chairs
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/classic-exam-room-stools/" target="_blank" rel="noopener noreferrer">
                                <img src="img/ClassicExamRoom.jpeg" alt="Exam room stools preview" />
                                <br />
                                Exam Room Stools
                            </a>
                        </td>
                    </tr>
                </table>
                <div className="page-footer">
                    <p>If you would like more information about the OM line of products, <a href="http://kodrichassociates.com/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default OM;