import React, { Component } from 'react';
import Next from '../images/next.png'
import Previous from '../images/previous.png'
import { Trans } from 'react-i18next';
import { InputText } from 'primereact/inputtext';

class PaymentForm extends Component {
    render() {
        return <div>
            <div>
                <table>
                    <tr>
                        <td><Trans>CreditCardNumber</Trans></td>
                        <td className='td'><InputText type='text' id='cardnum'/></td>
                    </tr>
                    <tr>
                        <td><Trans>CVV</Trans></td>
                        <td className='td'><InputText type='text' id='cvv'/></td>
                    </tr>
                    <tr>
                        <td><Trans>ExpirationDate</Trans></td>
                        <td className='td'><div style={{display: 'inline-block'}}><InputText type='number' id='month' placeholder='MM' style={{width: '100px'}}/></div> <div style={{display: 'inline-block'}}>/</div> <div style={{display: 'inline-block'}}><InputText type='number' id='year' placeholder='YYYY' style={{width: '100px'}}/></div></td>
                    </tr>
                </table>
            </div>
            <img src={Previous} alt='previous' className='next' onClick={this.props.previous}/>      
            <img src={Next} alt='next' className='next' onClick={this.props.next}/>
        </div>
    }
}
export default PaymentForm;