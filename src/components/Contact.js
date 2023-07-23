import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return <div>
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column ', fontSize: 'x-large', marginTop: '20px' }}>
                <h2 style={{ marginTop: '20px' }}>Contact Information</h2>
                <p style={{ marginTop: '20px' }}><strong>Email:</strong> <span id="email">rentall@gmail.com</span></p>
                <p style={{ marginTop: '20px' }}><strong>Phone Number:</strong> <span id="phone">6134555589</span></p>
                <p style={{ marginTop: '20px' }}><strong>Location:</strong> <span id="location">1730 Saint Laurent</span></p>
            </div>
        </div>
    }
}
export default Contact;