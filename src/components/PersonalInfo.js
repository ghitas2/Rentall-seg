import { InputText } from 'primereact/inputtext';
import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './Proceed.css';
import Next from '../images/next.png'

class PersonalInfo extends Component {

    render() {
        return <div>
            <table>
                <tr>
                    <td><label htmlFor='idNum'><Trans>IDNumber</Trans></label></td>
                    <td className='td'><InputText type='text' id='idNum'/></td>
                </tr>
                <tr>
                    <td><label htmlFor='name'><Trans>Name</Trans></label></td>
                    <td className='td'><InputText type='text' id='name'/></td>
                </tr>
                <tr>
                    <td><label htmlFor='firstname'><Trans>Firstname</Trans></label></td>
                    <td className='td'><InputText type='text' id='firstname'/></td>
                </tr>
                <tr>
                    <td><label htmlFor='phone'><Trans>Phone</Trans></label></td>
                    <td className='td'><InputText type='text' id='phone'/></td>
                </tr>
            </table>
            <img src={Next} alt='next' className='next' onClick={this.props.next}/>
        </div>
    }
}
export default PersonalInfo;