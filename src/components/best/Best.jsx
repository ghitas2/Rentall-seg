import React from 'react'

import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'
import { useTranslation } from 'react-i18next'

import './Best.css'

const Best = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='best'>
            <h1>{t('findBestRated')}</h1>
            <div>
                <p><span className='bold'>{t('All')}</span></p>
                <p>{t('Commercial')}</p>
                <p>{t('Residential')}</p>
                <p>{t('Agricultural')}</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <button className='btn'>{t('ViewAll')}</button>
        </div>
    )
}

export default Best
