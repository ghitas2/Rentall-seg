import React, { Component } from 'react';
import Hero from './hero/Hero';
import Best from './best/Best';
import Featured from './featured/Featured';
import Footer from './footer/Footer';
import './featured/Featured.css'

class Home extends Component {
    render() {
        return (<div>
        <Hero />
        <Best />
        <Featured />
        <Footer />
        </div>);
    }
}
export default Home;