import React from 'react';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Hero from './container/hero/Hero';
import Aboutus from './container/aboutus/Aboutus';
import Popularfood from "./container/popular/Popularfood";
import Service from './container/service/Service';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './container/Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init({ 
  duration: 900,  // Animation duration in milliseconds
  delay: 300,     // Delay between animations in milliseconds
});

const App = () => {
  return (
    <div className='body-container'>
      <header className='header__container'>
          <Navbar/> 
      </header>
       <Hero/> 
       <Aboutus/>
       <Popularfood/>
       <Service/>
       <Newsletter/>
       <Footer/>
    </div>
  );
}

export default App;
