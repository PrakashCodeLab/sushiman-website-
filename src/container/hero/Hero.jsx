import "./Hero.scss";
import Buttons from "../../components/buttons/Buttons";
import HeroBg from "../../assets/images/sushi-1.png";
import TestImg from "../../assets/images/user.png";



const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__section__left">
        <img data-aos="flip-up" src={HeroBg} alt="" className="hero__img" />
        <h2 data-aos="zoom-in" className="hero__heading">
          日 <br />本 <br />食
        </h2>

        <div className="hero__sec__overlay"></div>
      </div>
      <div className="hero__section__right">
        <div  data-aos="fade-left" className="hero__sec__content">
          <h2 >Feel the taste of Japanese food</h2>
          <p >
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div  className="hero__btn__section">
               <Buttons BtnStyle={"btn-primary"} Text={"order now"}/>
               <Buttons BtnStyle={"btn-secondary"} Text={"how to order"}/>
          </div> 
        </div>

        <div data-aos="fade-left" className="hero__content__testimonials">
          <div className="test__hero__one">
            <h4>
              24 <span>k+</span>
            </h4>
            <p>Happy Customers

</p>
          </div>
          <div className="test__hero__two">
            <img src={TestImg} alt="" className="hero__test-img" />
            <p>
              <q>
                This is the best Japanese food delivery service that ever
                existed.
              </q>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
