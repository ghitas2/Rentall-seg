import React, { Component } from 'react';
import { Carousel } from 'primereact/carousel';
import './Testimonials.css';
import FiveStars from '../images/fivestars.png';
import FourStars from '../images/fourstars.png';
import ThreeStars from '../images/threestars.png';
import CarouselHeader from '../images/carousel-header.png';

class Testimonials extends Component {
    render() {

        const itemTemplate = (testimonial) => {
            return (
                <div className='carousel'>
                    <img src={testimonial.rating} alt='testimonial'/>
                    <br></br>
                    <p style={{width: '300px'}}>{testimonial.feedback}</p>
                    <br></br>
                    <p className='text'>{testimonial.name}</p>
                </div>                
            );
        }

        const testimonials = [
            { name: 'Ghita Sebban', feedback: 'I highly recommend. Very satisfied with the result. Professional and customer-oriented team. Excellent quality of service', rating: FiveStars },
            { name: 'John White', feedback: 'I recommend Rentall. Good service, manager very helpful, attentive and punctual', rating: FourStars},
            { name: 'Alice Berry', feedback: 'The final result  with Rentall was satisying to me. But the reception was not that great', rating: ThreeStars},
            { name: 'Robert Smith', feedback: 'I found my dream house thanks to Rentall team. Very good service and impeccable customer service. Best wishes', rating: FiveStars}
        ]
        return <div className='carousel'>
            <img src={CarouselHeader} alt='carousel header' style={{width: '1000px'}}/>
            <Carousel value={testimonials} itemTemplate={itemTemplate}></Carousel>
        </div>
    }
}
export default Testimonials;