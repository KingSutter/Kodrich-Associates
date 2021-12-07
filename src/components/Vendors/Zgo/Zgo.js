import React, {Component} from 'react';
import '../VendorLandings.css';

class Zgo extends Component {
    render() {
        return (
            <div style={{paddingBottom: "6vh"}}>
                <div className="mission-header">
                    <a href="https://shopzgotech.com/en/" target="_blank" rel="noopener noreferrer"><img src="img/Zgo-logo.png" alt="Zgo company logo" width="356" style={{marginTop: "1%", marginLeft: "1%"}}/></a>
                    <p>
                    Custom orders with literally unlimited finish options including your own company logo, custom design, or image in 4 weeks, and independent/incorporated technology solutions as well
                    </p></div>
                <table width="500" border="0" cellpadding="20" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.zgotechnologies.com/product-category/monitor-arm/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Zgo-wood-with-cables.png" alt="single monitor arm preview" />
                                <br />
                                Single monitor arm
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.zgotechnologies.com/product-category/monitor-arm/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Zgo-two-monitors-one-arm-blue-cropped.png" alt="Double Monitor Arm preview" />
                                <br />
                                Double Monitor Arm
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.zgotechnologies.com/product-category/monitor-arm/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Zgo-4-monitors.png" alt="Multi-Monitor Arm preview" />
                                <br />
                                Multi-Monitor Arm
                            </a>
                        </td>
                    </tr>
                </table>
                <table width="500" border="0" cellpadding="25" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.zgotechnologies.com/product-category/technology-products/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Zgo-technology-products.png" alt="technology products collage" />
                                <br />
                                Technology Products
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="hhttps://www.zgotechnologies.com/product-category/accessories/" target="_blank" rel="noopener noreferrer">
                                <img src="img/Zgo-accessories.png" alt="accessories collage" />
                                <br />
                                Accessories
                            </a>
                        </td>
                    </tr>
                </table>
                <div className="page-footer">
                    <p>If you would like more information about the Zgo line of products, <a href="http://kodrichassociates.com/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default Zgo;