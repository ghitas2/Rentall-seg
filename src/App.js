import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './components/navbar/Navbar.css'
import './App.css'
import {InputText} from "primereact/inputtext"
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import Testimonials from './components/Testimonials'
import TopRated from './components/TopRated'
import SearchResults from './components/SearchResults'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Proceed from './components/Proceed'

function App() {

  const [visible, setVisible] = useState(false)
  const [display, setDisplay] = useState(true)
  const [acqType, setAcqType] = useState('APT')
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const acqTypes = [
    { code: 'APT', name: t('Apartment') },
    { code: 'IND', name: t('House') }
  ]

  const handleClick = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  const handleMenu = () => {
    setDisplay(false);
  }

  const search = () => {
    setVisible(false);
    navigate('/search');
  }

  return (
    <div>
      <Sidebar position="left" visible={visible} onHide={() => setVisible(false)}>
        <h3>{t('FilterBy')}</h3>
        <Card>
        <div className='group'>
          <label htmlFor="keywords" className='label'>{t('Keywords')}</label>
          <br/>
           <InputText className='input' id='keywords' placeholder={t('keywordsPlaceHolder')} />          
        </div>
        <div className='group'>
          <input id="buy" type="checkbox" style={{marginLeft: '5px'}}/>
          <label for="buy" style={{marginLeft: '5px'}} className='label'>{t('Buy')}</label>
          <input id='rent' type="checkbox" style={{marginLeft: '5px'}}/>
          <label for="rent" style={{marginLeft: '5px'}} className='label'>{t('Rent')}</label>
        </div>
        <div className='group'>
          <label htmlFor="priceFrom" className='label'>{t('PriceBetween')}</label>
          <br/>
           <InputText className='input' id='priceFrom' placeholder='Minimum $' />
           <span className='plaintext'>{t('And')}</span> 
           <InputText className='input' id='priceTo' placeholder='Maximum $' />
        </div>
        <div className='group'>
          <label htmlFor="surfaceFrom" className='label'>{t('SurfaceBetween')}</label>
          <br/>
          <InputText id='surfaceFrom' placeholder='Minimum m2' className='input'/>
          <span className='plaintext'>{t('And')}</span>
          <InputText id='surfaceTo' placeholder='Maximum m2' className='input'/>
        </div>
        <div className='group'>
          <label htmlFor='acqType' className='label'>{t('Type')}</label>
          <br style={{marginBottom: '5px'}}/>
          <Dropdown className='select' optionLabel='name' options={acqTypes} onChange={(e) => setAcqType(e.value)} value={acqType} placeholder={t('SelectType')}/>
        </div>
        <div className='group'>
          <Button className='button' onClick={search}>{t('Submit')}</Button>
        </div>
        
        </Card>
        
      </Sidebar>

      <div id='content'>
        <Navbar notify={handleClick} menuClicked={handleMenu}/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/toprated' element={<TopRated/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/testimonials' element={<Testimonials/>}/>
            <Route exact path='/search' element={<SearchResults/>}/>
            <Route exact path='/proceed' element={<Proceed/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
