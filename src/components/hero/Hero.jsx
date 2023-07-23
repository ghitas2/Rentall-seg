import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

import './Hero.css'

const Hero = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const search = () => {
        navigate('/search');
    }
    return (
        <div className='hero'>
            <div className='content'>
                <h1>{t('findPlace')}</h1>
                <p className='search-text'>{t('findDescription')}</p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder={t('keywordsPlaceHolder')} />
                    </div>
                    <div className='radio'> 
                        <input type='checkbox' id='Buy-or-rent'/>
                        <label>{t('Buy')}</label>
                        <input type='checkbox'  id='Buy-or-rent'/>
                        <label>{t('Rent')}</label>
                        <button type='submit' onClick={search}><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
