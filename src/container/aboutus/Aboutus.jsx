import './Aboutus.scss';
import AboutOne from "../../assets/images/sushi-3.png";
import AboutTwo from "../../assets/images/sushi-2.png";
import {BsArrowUpRight} from "react-icons/bs";
import  AboutOneside from "../../assets/images/about_bg1.png";
import AboutOneside2 from "../../assets/images/about_bg2.png";

const Aboutus = () => {
  return (
    <section  id="aboutus" className='aboutus'>
        <div className="aboutus__container__left">
           
        <div className="aboutus__image__one">
                <img data-aos="fade-right" className='about__image1'  src={AboutOne} alt="" />
                <img data-aos="zoom-in" className='about__bg1' src={AboutOneside} alt="" />
                
            </div>
            <div className="aboutus__image__two">
                <img data-aos="fade-right" className='about__image2'   src={AboutTwo} alt="" />
                <img data-aos="zoom-in" className='about__bg2' src={AboutOneside2} alt="" />
                
            </div>

            <div  data-aos="zoom-in" className="aboutus__btn">
                <button className='btn btn-primary btn-aboutus'>
                    
                  <span>learn more</span>  
                   <BsArrowUpRight/> </button>
            </div>
        </div>

        <div data-aos="fade-left" className="aboutus__right__container">

            <p  data-aos="fade-up" className='about__lead'>About Us / 私たちに関しては</p>
            <h3 data-aos="fade-up" className='aboutus__heading'>Our mission is to bring true Japanese flavours to you.</h3>
            <p data-aos="fade-up" className='aboutus__text'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>

        </div>
    </section>
  );
}

export default Aboutus;
