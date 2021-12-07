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
                            <img src="img/om-logo.png" alt="OM logo" onClick={()=>this.handleImageClick("om")}/>
                        </td>
                        <td>
                            The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product. We are focused on delivering smart solutions to our customers wide range of needs. We stock many fabrics to offer our quick shipping on our products. Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.
                        </td>
                    </tr>
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
                            <img src="img/Zgo-logo.png" alt="Zgo logo" onClick={()=>this.handleImageClick("Zgo")}/>
                        </td>
                        <td>
                        Zgo Technologies' award-winning products help to optimize the computing experience by enhancing user comfort, increasing desk performance and improving overall office aesthetics while using today’s technology in the most effective way. Our monitor arms stand apart with our patented Integrated USB Docking Station, Zdock, which attaches to the base of your Zgo Monitor Arm, our heavy-duty weight capacity, which supports all monitors up to 38” and our custom side panels, which come in a variety of colors and designs.
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default withRouter(Vendors);
