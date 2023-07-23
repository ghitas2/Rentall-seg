import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import PersonalInfo from './PersonalInfo';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { Card } from 'primereact/card';
import './Proceed.css'
import { useTranslation } from 'react-i18next';
        
class MyProceed extends Component {

    state = {
        activeIndex: 0
    }

    next = () => {
        if (this.state.activeIndex < 2) {
            this.setState({ activeIndex: this.state.activeIndex+1 })
        }
    }

    previous = () => {
        if (this.state.activeIndex > 0) {
            this.setState({ activeIndex: this.state.activeIndex-1 })
        }
    }

    render() {
        const items = [
            {
                label: this.props.translation('PersonalInformation')
            },
            {
                label: this.props.translation('Payment')
            },
            {
                label: this.props.translation('Confirmation')
            }
        ];

        return <div style={{paddingTop: '50px'}}>
            <Steps model={items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex : e.index})} readOnly={false} />
            <div className='steps'>
                <Card>
                {
                    this.state.activeIndex === 0 ? <PersonalInfo next={this.next} previous={this.previous}/> : (this.state.activeIndex === 1 ? <PaymentForm next={this.next} previous={this.previous}/> : <Confirmation next={this.next} previous={this.previous}/>)
                }
                </Card>
            </div>
        </div>
    }
}

function Proceed(props) {
    let { t } = useTranslation();
    return <MyProceed {...props} translation={t} />
}

export default Proceed;