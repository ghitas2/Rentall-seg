import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'
import { useTranslation } from 'react-i18next'

const Featured = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='featured'>
            <h1 className='featured-text'>{t('topFeatured')}</h1>
            <p className='featured-text'>{t('selectBy')}</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>{t('houseForSale')}</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>{t('Bedrooms')}:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>{t('Bathrooms')}:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>{t('Surface')}:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>{t('estPayment')}:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>{t('beautifulModernHome')}</p>
                    <button className='btn'>{t('ViewListing')}</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>{t('beautifulModernHome2')}</p>
                    <button className='btn'>{t('ViewListing')}</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>{t('houseForSale')}</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>{t('Bedrooms')}:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>{t('Bathrooms')}:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>{t('Surface')}:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>{t('estPayment')}:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured
