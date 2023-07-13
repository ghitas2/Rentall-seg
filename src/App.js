import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'




const handleClick = () => {
  if (this.visible) {
    this.setVisible(false);
  } else {
    this.setVisible(true);
  }
}


function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Navbar notify={handleClick} />
      <Sidebar visible={visible} />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
