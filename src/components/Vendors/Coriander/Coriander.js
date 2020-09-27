import React, {Component} from 'react';
import '../VendorLandings.css';

class Coriander extends Component {
    render() {
        return (
            <div style={{paddingBottom: "6vh"}}>
                <div className="mission-header">
                    <img src="img/Coriander-logo.png" alt="Coriander company logo" width="356" style={{marginTop: "1%", marginLeft: "1%"}}/>
                    <p>
                    Manufactured in the USA. 
                    Coriander Designs offers products and services that address the unique needs in Corporate, Healthcare and the Education Environments. 
                    Any standard or custom product can be manipulated to meet a project’s precise requirements. Sustainability.
                    </p></div>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.corianderdesigns.com/products/taylor-collection/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Coriander-Taylor.jpg" alt="Talor collection preview" />
                                <br />
                                Taylor Collection
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.corianderdesigns.com/products-page/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Coriander-Lounge.jpg" alt="Lounge furniture preview" />
                                <br />
                                Lounge Furnature
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.corianderdesigns.com/products-page/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Coriander-Lounge2-cropped.jpg" alt="Lounge furniture preview 2" />
                                <br />
                                Lounge Furnature
                            </a>
                        </td>
                    </tr>
                </table>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.corianderdesigns.com/products/technology-conference-table/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Coriander-Conference.jpg" alt="Conference Tables preview" />
                                <br />
                                Conference Tables
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.corianderdesigns.com/product_category/occasional-tables/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Coriander-Occasional.jpg" alt="Occasional Tables preview" />
                                <br />
                                Occasional Tables
                            </a>
                        </td>
                    </tr>
                </table>
                <div className="page-footer">
                    <p>If you would like more information about the Coriander line of products, <a href="http://localhost:3000/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default Coriander;