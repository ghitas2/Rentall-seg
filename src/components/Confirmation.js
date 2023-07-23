import React, { Component } from 'react';
import Previous from '../images/previous.png'
import ConfirmationImage from '../images/confirm.png' 

class Confirmation extends Component {
    render() {
        return <div>
            
            <div className='confirmation'>
            Confirmation <img src={ConfirmationImage} alt='confirmation' style={{marginLeft: '20px', width: '30px', cursor: 'pointer'}}/>
            </div>
            <div>
                <img src={Previous} alt='previous' className='next' onClick={this.props.previous}/>  
            </div>
                
        </div>
    }
}
export default Confirmation;