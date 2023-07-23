import React, { Component } from 'react';
import './TopRated.css'
import './DisplayHouse.css'
import { Trans } from 'react-i18next';

class DisplayHouse extends Component {
    render() {
        let house = this.props.house;

        return (<div className='house-details'>
            <div style={{display: 'inline-block', verticalAlign: 'top'}}><img className='img' src={house.photo} alt=''/></div>
            
            <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <div className='top-rated-title'><Trans>Description</Trans></div>
                <div className='top-rated-text'>{house.description}</div>
                <div className='top-rated-title'><Trans>Address</Trans></div>
                <div className='top-rated-text'>{house.address}</div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>Price</Trans></div>
                <div className='top-rated-text'>{house.price}</div>
                </div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>Surface</Trans></div>
                <div className='top-rated-text'>{house.surface}m<sup>2</sup></div>
                </div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>Rooms</Trans></div>
                <div className='top-rated-text'>{house.rooms}</div>
                </div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>Bathrooms</Trans></div>
                <div className='top-rated-text'>{house.bathrooms}</div>
                </div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>LivingRoom</Trans></div>
                <div className='top-rated-text'>{house.livingRoom ? <Trans>Yes</Trans> : <Trans>No</Trans>}</div>
                </div>
                <div className='top-rated-group'>
                <div className='top-rated-title'><Trans>Floor</Trans></div>
                <div className='top-rated-text'>{house.floor}</div>
                </div>
            </div>
            <div className='views-content'>
            <div className='views'><Trans>Views</Trans>: </div><div className='views'>{house.views}</div>
            </div>
            
        </div>)
    }
}
export default DisplayHouse;