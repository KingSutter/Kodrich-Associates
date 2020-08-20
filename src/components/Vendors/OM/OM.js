import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './OM.css';

class OM extends Component {
    render() {
        return (
            <div>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/om5-active/" target="_blank">
                                <img src="img/OM5.jpg" alt="OM5 series preview" />
                                <br />
                                OM5 Active Series
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/truly/" target="_blank">
                                <img src="img/Truly.jpeg" alt="Truly series preview" />
                                <br />
                                Truly Series
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/ginny/" target="_blank">
                                <img src="img/Ginny.jpeg" alt="Ginny series preview" />
                                <br />
                                Ginny Series
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/yes-series/" target="_blank">
                                <img src="img/YESstools.jpg" alt="YES series stools preview" />
                                <br />
                                YES Series Stools
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/yes-series/" target="_blank">
                                <img src="img/YESchairs.jpeg" alt="YES series chairs preview" />
                                <br />
                                YES Series Chairs
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.omseating.com/series/classic-exam-room-stools/" target="_blank">
                                <img src="img/ClassicExamRoom.jpeg" alt="Exam room stools preview" />
                                <br />
                                Exam Room Stools
                            </a>
                        </td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}

export default OM;