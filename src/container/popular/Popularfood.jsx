import "./Popularfood";
import ButtonCard from "./buttonCard";  
import {AiFillStar,AiOutlineArrowRight} from "react-icons/ai";

import  Img1 from "../../assets/images/sushi-1.png";
import   Img2 from "../../assets/images/sushi-2.png";
import  Img3 from "../../assets/images/sushi-3.png";
import  Img4 from "../../assets/images/sushi-4.png";
import  Img5 from "../../assets/images/sushi-5.png";
import  Img6 from "../../assets/images/sushi-6.png";
import  Img7 from "../../assets/images/sushi-7.png";
import  Img8 from "../../assets/images/sushi-8.png";
import  Img9 from "../../assets/images/sushi-9.png";
import  Img10 from "../../assets/images/sushi-10.png";
import  Img11 from "../../assets/images/sushi-11.png";
import  Img12 from "../../assets/images/sushi-12.png";

const Popularfood = () => {

  const FoodDetailes=[{
           name: "original sushie",
           Id: "1",
           poster:Img12,
           rating:5.0,
           price:45
  },

  {
    name: "ramen legendo",
    Id: "2",
    poster:Img10,
    rating:4.0,
    price:30
},

{
    name: "sushine",
    Id: "3",
    poster:Img11,
    rating:4.5,
    price:60
}



]


  return (
    <section id="menu"   className='poppular__food'>
          <h2 data-aos="flip-up">Popular Food / 人気</h2>

          <div data-aos="slide-up" className="popularfood__container--section">
             <ButtonCard Img={Img6} Foodtime={"sushie"}/>
             <ButtonCard Img={Img7} Foodtime={"Ramen"}/>
             <ButtonCard Img={Img8} Foodtime={"noodles"}/>
             <ButtonCard Img={Img9} Foodtime={"legendo"}/>
             <ButtonCard Img={Img10} Foodtime={"soup"}/>
             <ButtonCard Img={Img11} Foodtime={"sushine"}/>
          </div>

          <div className="popular__foods__card">{FoodDetailes.map((foodDetail,index)=>{
            return <article data-aos="fade-up" key={foodDetail.Id} className={index===1? "food__card special":"food__card"}>
            <img data-aos="zoom-in" src={foodDetail.poster} alt="food"/>
            <h4 data-aos="zoom-in">{foodDetail.name}</h4>

            <div  className="food__details">
                <p data-aos="zoom-in"> <span><AiFillStar className="icon"/></span>{foodDetail.rating}</p>
                <p data-aos="zoom-in">${foodDetail.price}</p>
            </div>
        </article>
          })}
           
          </div>
           

       <div data-aos="fade-up" className="btn-group">
        <button className="btn btn-primary btn-populor">explore food
           <AiOutlineArrowRight size={27}/>
        
        </button>

       </div>
          

    </section>
  );
}

export default Popularfood;
