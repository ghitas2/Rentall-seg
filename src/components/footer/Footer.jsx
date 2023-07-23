import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import './Footer.css'

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>{t('About')}</h3>
                    <p>{t('Company')}</p>
                    <p>{t('Details')}</p>
                    <p>{t('Planning')}</p>
                    <p>{t('AboutUs')}</p>
                </div>
                <div className='col'>
                    <h3>{t('Company')}</h3>
                    <p>{t('Company')}</p>
                    <p>{t('Details')}</p>
                    <p>{t('Planning')}</p>
                    <p>{t('AboutUs')}</p>
                </div>
                <div className='col'>
                    <h3>{t('Legal')}</h3>
                    <p>{t('Company')}</p>
                    <p>{t('Details')}</p>
                    <p>{t('Planning')}</p>
                    <p>{t('AboutUs')}</p>
                </div>
                <div className='col'>
                    <h3>{t('Information')}</h3>
                    <p>{t('Company')}</p>
                    <p>{t('Details')}</p>
                    <p>{t('Planning')}</p>
                    <p>{t('AboutUs')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
