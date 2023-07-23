import React, { Component } from 'react';
import Apt1 from '../assets/apt1.jpeg';
import Apt2 from '../assets/apt2.jpeg'
import Apt3 from '../assets/apt3.jpeg'
import House1 from '../assets/house1.jpg'
import './SearchResults.css';
import DisplayHouse from './DisplayHouse';
import Back from '../images/back.png';
import Go from '../images/go.png'
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router';

class MySearchResults extends Component {
    state = {
        home: undefined
    }

    handleClick = (house) => {
        this.setState({ home: house });
    }

    reinit = () => {
        this.setState({ home: undefined });
    }

    goTo = () => {
        this.props.navigate('/proceed');
    }
    render() {
        const usd = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          });

        let results = [
            { id:'1', type: 'Apartment', opType: 'Sale', description: 'Introducing Solterra, a bright new concept in apartment design we call ecoluxury living. Solterra apartments in Ottawa, was created from the ground up to not only provide a boutique hotel-style living experience, but to do it with zero net energy impact—making it the first of its kind anywhere. The future of apartment living is here at Solterra EcoLuxury Apartments, San Diego, CA’s premier eco-friendly residential community. Discover Solterra where tomorrow is today℠.', address: '1730 St. Laurent Blvd Suite 800 Ottawa, ON K1G5L1', surface: 100, price: usd.format(1000000), rooms: 2, bathrooms: 2, livingRoom: true, views: 120, floor: 1, photo: Apt1 },
            { id:'2', type: 'Apartment', opType: 'Rent', description: 'Very large apartment, close to mcgill university and udem. Bus 480, 80, 55 go direct to the city center. 51 towards the University of Ottawa or metro Laurier. Dream location. Close to all restaurants and bars, shops and bakery cafes etc. ** 1 large double bedroom and 1 large closed bedroom with brick wall ** Large common open space and open kitchen. 5 appliances included in the lease.', address: '650 Woodcliffe Private, Ottawa, ON, Canada, K1C 7P7', surface: 90, price: usd.format(560), rooms: 2, bathrooms: 1, livingRoom: false, views: 250, floor: 3, photo: Apt2 },
            { id:'3', type: 'Apartment', opType: 'Rent', description: 'Apartment for sale Cannes residence with swimming pool and tennis park in absolute calm EXCLUSIVELY In one of the most beautiful residences in Ottawa sector and one of the most sought after for its green setting and modern architecture - residences from the 90s, very beautiful 3-room apartment ...', address: '124 Springfield Rd, Ottawa, ON, Canada, K1M 2C8', surface: 150, price: usd.format(2000), rooms: 5, bathrooms: 3, livingRoom: true, views: 500, floor: 3, photo: Apt3 },
            { id:'4', type: 'House', opType: 'Sale', description: 'A stunning luxury custom house built on one of the last premium lots in Emerald Creek Estates is designed for luxury and comfort! Impeccably immaculate pride of ownership shows inside and outside of this family home. Beautiful main floor spaces-including the breathtaking gourmet kitchen/family room w/wood burning fireplace, serving/bar area, formal living & dining rooms, and 4 seasons sunroom/den overlooking an incredible backyard with an in-ground salt water heated pool featuring a waterfall/fountain. The 2nd floor has 4 great size bedrooms (two primary bedrooms are with luxurious en-suite baths and walk-in closets), a large laundry room, family bathroom. The walkout garden level comes w/bar, fridge & sink set for entertaining plus a 2nd family room w/gas fireplace. This home offers a sensational sense of scale and dramatic living spaces enhanced by soaring ceilings & fabulous room sizes. Call today and immerse yourself in luxury and tranquility with no rear neighbors! Move right in!', address: '100 Bronson Ave, Ottawa, ON, Canada, K1R 6G8', surface: 400, price: usd.format(2677000), rooms: 8, bathrooms: 5, livingRoom: true, views: 1006, floor: 3, photo: House1 }
        ]

        if (this.state.home === undefined) {
            return <div>
                {
                    results.map(house => {
                        return <div className='search-group'>
                            <img src={house.photo} alt='' className='img' onClick={() => { this.handleClick(house) }}/>
                            <span><Trans>For</Trans> <Trans>{house.opType}</Trans> - <Trans>{house.type}</Trans></span><p className='search-price'>{house.price}</p>
                        </div>
                    })
                }
            </div>
        }
        else {
            return <div>
                        <DisplayHouse house={this.state.home}/>
                        <div className='back'>
                        <div style={{display: 'inline-block'}}>
                            <img src={Back} onClick={this.reinit} style={{width: '30px', alignItems: 'center'}} alt=''/>
                            
                        </div>
                        <div style={{display: 'inline-block'}}>
                            <img src={Go} style={{width: '30px', alignItems: 'center'}} alt='' onClick={this.goTo}/>
                        </div>
                        </div>
                    </div>;
        }
    }
}

function SearchResults(props) {
    let navigate = useNavigate();
    return <MySearchResults {...props} navigate={navigate} />
}

export default SearchResults;