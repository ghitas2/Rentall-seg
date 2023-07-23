import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTranslation } from 'react-i18next'
import English from '../../images/english.png'
import French from '../../images/french.png'

const Navbar = (props) => {

    const [click, setClick] = useState(false)
    const [langage, setLangage] = useState('fr')
    const handleClick = () => setClick(!click)
    const { t, i18n } = useTranslation();
    
    const changeLanguage = () => {
        if (langage === 'en') {
            setLangage('fr');
        }
        else {
            setLangage('en');
        }
        i18n.changeLanguage(langage);
    };


    return (
        <div className='navbar'>
            <div className='container ' >
                <i className='pi pi-bars tooltip' style={{ fontSize: '2em', cursor: 'pointer' }} onClick={props.notify}><span class="tooltiptext">{t('AdvancedSearch')}</span></i>

                <h1><span><BsFillHouseFill />Rentall</span>Estate</h1>
                <button className='btn'>{t('SignIn')}</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/' onClick={props.menuClicked}>{t('Home')}</Link></li>
                    <li><Link to='/toprated' onClick={props.menuClicked}>{t('TopRated')}</Link></li>   
                    <li><Link to='/testimonials' onClick={props.menuClicked}>{t('Testimonials')}</Link></li>
                    <li><Link to='/contact' onClick={props.menuClicked}>{t('Contact')}</Link></li>
                    <li>
                        <img src={langage === 'fr' ? French : English} alt={langage} onClick={changeLanguage} style={{width: '30px', cursor: 'pointer'}}/>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
