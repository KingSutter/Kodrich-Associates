import React, {Component} from 'react';
import './Vendors.css';

class Vendors extends Component {
    render() {
        return (
            <div className="vendors-page">
                <table>
                    <tr>
                        <td>
                            <img src="img/Coriander-logo.png" alt="Coriander logo"/>
                        </td>
                        <td>
                            Manufactured in the USA. Coriander Designs offers products and services that address the unique needs in Corporate, Healthcare and the Education Environments. Any standard or custom product can be manipulated to meet a project’s precise requirements. Sustainability.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/om-logo.png" alt="OM logo"/>
                        </td>
                        <td>
                            The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product. We are focused on delivering smart solutions to our customers wide range of needs. We stock many fabrics to offer our quick shipping on our products. Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/Standup-logo.png" alt="Standup logo"/>
                        </td>
                        <td>
                            Stand Up overview
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/Invincible-logo.png" alt="Invincible logo"/>
                        </td>
                        <td>
                            Invincible overview
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="img/Afra-logo.png" alt="Afra logo"/>
                        </td>
                        <td>
                            Afra overview
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Vendors;
