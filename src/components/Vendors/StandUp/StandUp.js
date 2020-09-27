import React, {Component} from 'react';
import '../VendorLandings.css';

class StandUp extends Component {
    render() {
        return (
            <div className="StandUp-page" style={{paddingBottom: "6vh"}}>
                <div className="mission-header">
                    <img src="img/Standup-logo.png" style={{marginTop: "1%", marginLeft: "1%"}}/>
                    <p>
                    Empowering employees to transition from seated to standing positions throughout the day can help increase productivity and improve employee wellness. With mechanisms for all major office furniture manufacturers, standUP makes it easy for designers and dealers to spec standUP’s sit/stand mechanisms into new projects, or retrofit existing office furniture.
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
                    <p>If you would like more information about the StandUp line of products, <a href="http://localhost:3000/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default StandUp;