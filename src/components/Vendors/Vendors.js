import React, {Component} from 'react';
import './Vendors.css';
import {withRouter} from 'react-router-dom';

class Vendors extends Component {
    handleImageClick = (vendor) => {
        this.props.history.push({
          pathname: `/vendors/${vendor}`
        })
      }
    
    render() {
        return (
            <div className="vendors-page" style={{paddingBottom: "10vh"}}>
                <div className="page-header">
                    <h2>Vendors</h2>
                    <p>If you would like more information about our products, <a href="http://kodrichassociates.com/#/contact">click here to contact us</a>.</p>
                </div>
                <table width="90%" border="0" cellpadding="30%">
                    <tr>
                        <td>
                            <img src="img/Coriander-logo.png" alt="Coriander logo" onClick={()=>this.handleImageClick("coriander")}/>
                        </td>
                        <td>
                            Manufactured in the USA. Coriander Designs offers products and services that address the unique needs in Corporate, Healthcare and the Education Environments. Any standard or custom product can be manipulated to meet a project’s precise requirements. Sustainability.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/om-logo.png" alt="OM logo" onClick={()=>this.handleImageClick("om")}/>
                        </td>
                        <td>
                            The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product. We are focused on delivering smart solutions to our customers wide range of needs. We stock many fabrics to offer our quick shipping on our products. Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <img src="img/Standup-logo.png" alt="Standup logo" onClick={()=>this.handleImageClick("standup")}/>
                        </td>
                        <td>
                            Empowering employees to transition from seated to standing positions throughout the day can help increase productivity and improve employee wellness. With mechanisms for all major office furniture manufacturers, standUP makes it easy for designers and dealers to spec standUP’s sit/stand mechanisms into new projects, or retrofit existing office furniture.
                        </td>
                    </tr> */}
                    <tr>
                        <td>
                            <img src="img/Invincible-logo.png" alt="Invincible logo" onClick={()=>this.handleImageClick("invincible")}/>
                        </td>
                        <td>
                            We are pleased to offer you some of the highest quality office furniture on the market. Invincible™ Office Furniture Solutions is proud to say our products; including our workstations, filing and storage solutions, systems furniture, and panel systems are 100% U.S. manufactured. Invincible™’s legendary “made in America” quality is supported by over a century of office furniture manufacturing experience and backed up by our lifetime warranty. When you buy Invincible™, you can know that we are “building forever furniture” just for you.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/Afra-logo.png" alt="Afra logo" onClick={()=>this.handleImageClick("afra")}/>
                        </td>
                        <td>
                            AFRA furniture offers a commercial and industrial furniture design representing comfort and innovation, using a broad spectrum of materials, technologies, finishes and colors. We are focused on diversity in design that is suitable for every project and environment. Our goal is to improve our quality of life, by supporting sustainability, innovation and training. AFRA is continuously looking to offer durability, purpose and harmony in all of our furniture.
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default withRouter(Vendors);
