import React, {Component} from 'react';
import '../VendorLandings.css';

class StandUp extends Component {
    render() {
        return (
            <div className="StandUp-page" style={{paddingBottom: "6vh"}}>
                <div className="mission-header">
                    <a href="https://www.standupdesking.com/" target="_blank" rel="noopener noreferrer"><img src="img/Standup-logo.png" alt="OM company logo" style={{marginTop: "1%", marginLeft: "1%"}}/></a>
                    <p>
                    Stand Up Mechanisms attach to all manufacturers panel systems.
                    <br/>
                    Convert fixed work areas into sit/stand workstations with Stand-Up Desking’s Mechanism.
                    Specify in new projects, or convert existing furniture to sit/stand.
                    </p></div>
                <table width="500" border="0" cellpadding="30" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <img src="img/standup1.png" alt="OM5 series preview" />
                        </td>
                        <td align="center" valign="center">
                            <img src="img/standup2.png" alt="Truly series preview" />
                        </td>
                        <td align="center" valign="center">
                            <img src="img/standup3.png" alt="Ginny series preview" />
                        </td>
                    </tr>
                </table>
                <div className="page-footer" style={{marginTop: "100px"}}>
                    <p>If you would like more information about the StandUp line of products, <a href="http://kodrichassociates.com/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default StandUp;