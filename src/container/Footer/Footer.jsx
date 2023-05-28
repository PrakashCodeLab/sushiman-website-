import React from 'react';
import "./Footer.scss"

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
     

  const link=[
    {title:"menu",id:"bcidscsi-1", link:"#menu"},
    {title:"food",id:"jjsbsudhsj-2", link:"#food"},
    {title:"services",id:"ndshvsv-3", link:"#services"},
    {title:"about us",id:"hgijknbu-4", link:"#aboutus"},
  ];

  return (
    <footer  className='footer__section'>
          <div   className="footer__logo__section">
            <h2 className='foot__head'>sushi<span className='footer__logo--span'>man</span></h2>
          </div>

          <ul   className="footer__link--section">{
            link.map((links,) =>(
              <li key={links.id} className="footer__link"><a href={links.link}>{links.title}</a></li> 
            ))
          }
               
          </ul>

          <div   className="footer__icons__section">
           <BsFacebook  size={29}/>
           <BsInstagram  size={29}/>
           <BsTwitter size={29}/>
          </div>
    </footer>
  );
}

export default Footer;
