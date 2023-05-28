import { useState } from 'react';
import Overlay from '../overlay/Overlay';
import './Navbar.scss';
import {BsSearch} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {CiCircleRemove} from "react-icons/ci";

const Navbar = () => {
    
  const [Navbar,setNavbar] =useState(false);
  


  const Hamclick = () => {
      setNavbar(!Navbar);
    
      
  };

  const handleLinkClick = () => {
    setNavbar(!Navbar);
  }



  return (
    <nav className='header__navbar'>
        <div className='header__logo'>
         <h2 data-aos="fade-down" className='navbar__heading'>sushiman</h2>
         <Overlay/>
        </div>

        <ul  data-aos="fade-down" className='header__menu'>
        <li ><a  href="#menu">menu</a></li>
        <li ><a  href="#food">food</a></li>
        <li ><a  href="#services">services</a></li>
        <li ><a  href="#aboutus">about us</a></li>
        <li ><a  href="/"><BsSearch size={27}/></a></li>
          </ul>

          <div  data-aos='fade-left' className='hamburger__section'>{
              Navbar? <CiCircleRemove role="button" onClick={Hamclick} size={36} data-aos="fade-down" className='hamicon__remove'/> :
              <GiHamburgerMenu   role="button" onClick={Hamclick} size={30}  data-aos="fade-up" className='hamicon__navbar'/> 
          }

          {
              Navbar? (
                <ul  data-aos="fade-left" className='header__menu__mobile'>
                <li className='navbar__list'><a className='mobile__link'  onClick={handleLinkClick}  href="#menu">menu</a></li>
                <li className='navbar__list'><a className='mobile__link' onClick={handleLinkClick}   href="#food">food</a></li>
                <li className='navbar__list'><a className='mobile__link' onClick={handleLinkClick}  href="#services">services</a></li>
                <li className='navbar__list'><a  className='mobile__link' onClick={handleLinkClick}  href="#aboutus">about us</a></li>
              <li className=' navbar__list'><BsSearch  data-aos="zoom-in" role='buttton' size={27} className='mobile__link' /></li>
                  </ul>  
              ):(
                 <BsSearch  data-aos="fade-up" role='buttton' size={27} className='search__mobile__nav'/>
              )
          }
          
          
          </div>
    </nav>
  );
}

export default Navbar;
