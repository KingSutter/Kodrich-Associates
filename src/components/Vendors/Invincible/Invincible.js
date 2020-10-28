import React, {Component} from 'react';

class Invincible extends Component {
    render() {
        return (
            <div className="Invincible-page" style={{paddingBottom: "6vh"}}>
                
                <div className="mission-header">
                    <a href="https://www.invinciblefurniture.com/" target="_blank" rel="noopener noreferrer"><img src="img/invincible-logo.png" style={{marginTop: "1%", marginLeft: "1%", maxWidth: "320px"}}/></a>
                    <p>
                    Invincible Furniture has always stood for quality, and for more than 100 years Invincible™ has been manufacturing products in the United States, using skilled U.S. labor, strong product designs, and quality U.S. materials. In fact, over 90% of Invincible’ s total spend is for U.S. goods and services (including materials and labor).
In addition, Invincible™ continues to use quality raw materials, including heavier (thicker) steel than most of our competitors, and designs that incorporate more forming for added strength, durability, and aesthetics.  

                    </p></div>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.invinciblefurniture.com/products_tables_flipnest.php" target="_blank" rel="noopener noreferrer">
                                <img src="img/invincible-flipnest.jpg" alt="Flipnest preview" />
                                <br />
                                Flipnest Tables
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.invinciblefurniture.com/products_desks_educator_series.php" target="_blank" rel="noopener noreferrer">
                                <img src="img/invincible-educator.jpg" alt="Educator preview" />
                                <br />
                                Educator Ironworks Desks
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.invinciblefurniture.com/products_vistamodular_overview.php" target="_blank" rel="noopener noreferrer">
                                <img src="img/invincible-vista.jpg" alt="Vista preview" />
                                <br />
                                Vista Modular Workspace
                            </a>
                        </td>
                    </tr>
                </table>
                <table width="500" border="0" cellpadding="10" className="vendor-preview-images">
                    <tr>
                        <td align="center" valign="center">
                            <a href="https://www.invinciblefurniture.com/products_tables_training.php" target="_blank" rel="noopener noreferrer">
                                <img src="img/invincible-training.jpg" alt="Training preview" />
                                <br />
                                Education Training Tables
                            </a>
                        </td>
                        <td align="center" valign="center">
                            <a href="https://www.invinciblefurniture.com/products_filingstorage_lateralfiles.php" target="_blank" rel="noopener noreferrer">
                                <img src="img/invincible-lateral.jpg" alt="Lateral filing storage preview" />
                                <br />
                                Lateral Filing and Storage
                            </a>
                        </td>
                    </tr>
                </table>
                <div className="page-footer">
                    <p>If you would like more information about the Invincible line of products, <a href="http://kodrichassociates.com/#/contact">click here to contact us</a>.</p>
                </div>
            </div>
        );
    }
}

export default Invincible;