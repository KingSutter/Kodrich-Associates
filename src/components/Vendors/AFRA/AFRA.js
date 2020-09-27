import React, {Component} from 'react';

class AFRA extends Component {
    render() {
        return (
            <div className="AFRA-page">
                <div className="mission-header">
                    <img src="img/Afra-logo.png" style={{marginTop: "1%", marginLeft: "1%", maxWidth: "250px"}}/>
                    <p>
                    AFRA Furniture offers a commercial and industrial furniture design representing comfort and innovation, using a broad spectrum of materials, technologies, finishes and colors. We are focused on diversity in design that is suitable for every project and environment. AFRA is continuously looking to offer durability, purpose and harmony in all of our furniture.
                    </p>
                    <p>Our objective is to help our customers to discover new ideas, design and inspiration for all areas and spaces.</p></div>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://afrafurniture.com/products/?f_product_application=12733" target="_blank" rel="noopener noreferrer" >
                                <img src="img/Afra-Hospitality.png" alt="Afra hospitality preview" style={{margin: "1.5vw"}} />
                                <br />
                                Hospitality
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://afrafurniture.com/products/?f_product_application=12734" target="_blank" rel="noopener noreferrer">
                                <img src="img/Afra-Workplace.png" alt="Afra workplace preview" style={{margin: "1.5vw"}}  />
                                <br />
                                Workplace
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://afrafurniture.com/products/?f_product_application=12735" target="_blank" rel="noopener noreferrer">
                                <img src="img/Afra-Healthcare.jpg" alt="Afra healthcare preview" style={{margin: "1.5vw"}}/>
                                <br />
                                Healthcare
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default AFRA;