import {useState} from 'react';
import "./Service.scss"
import Img1 from "../../assets/images/sushi-5.png";
import Img2 from "../../assets/images/sushi-4.png";
import {ImCheckboxUnchecked,ImCheckboxChecked} from 'react-icons/im';



const Service = () => {
    
    const [lists ,setList] = useState([
{title:"make sushie" ,id:1,checked:true},
{title:"Uramaki Sushi" ,id:2,checked:true},
{title:"Temaki Sushi" ,id:3,checked:true},
{title:"Oshizushi" ,id:4,checked:true},
{title:"Nigiri Sushi" ,id:5,checked:true},
{title:"Inari Sushi" ,id:6,checked:true},

])

const [Items, setItems]=useState([
    {title:"Oruncha" ,id:1,checked:true},
    {title:"Sakura Tea" ,id:2,checked:true},
    {title:"Aojiru" ,id:3,checked:true},
    {title:"Ofukucha" ,id:4,checked:true},
    {title:"Kombu-cha" ,id:5,checked:true},
    {title:"Mugicha" ,id:6,checked:true},


])



  return (
    <section id='food' className='service__container'>
        <div  className="service__sushi__container">
             <div data-aos="fade-right" className="service__sushie--content">
                <p className='services__para'>What’s Trending / トレンド</p>
                <h2 className='heading__services'>Japanese Sushi</h2>
                <p className='services__text'>Feel the taste of the most delicious Sushi here.</p>
               
               <ul data-aos="fade-right" className='services__list'>{lists.map((list)=>(
        
         <li key={list.id} className="service__list__items">
            <input  className='services__input' type="checkbox" name="checkbox" value={list.checked} />
            <span className='services__list__content'>{list.checked? <ImCheckboxChecked className='icon '/> : <ImCheckboxUnchecked className='icon'/>}{list.title}</span> 
         </li>  
         
        
               ))}</ul>
            
             </div>
             <div className="services__suschie--image__container">
                  <img data-aos="fade-left"  src={Img1} alt="" className="sushie__img--services" />
             </div>
        </div>
        <div  className="service__drinks__container">
            <div className="services__drinks--img__container">
                <img data-aos="fade-right"  src={Img2} alt="drinks" className="services__img__drinks" />
            </div>
            <div data-aos="fade-left" className="services__drink--content__container">
                <p className=' services__para'>What’s Trending / トレンド</p>
                <h2 className='heading__services'>Japanese Drinks</h2>
                <p className='services__text'>Feel the taste of the most delicious Japense drinks here.</p>
              
              <ul data-aos="fade-left" className='services__list__drinks'>{Items.map((item)=>(
                   <li  key={item.id} className="services__drinks__items">
                       <input  className='services__input__drinks' type='checkbox' name="items" value={item.checked}/>
                       <span  className='service__drink__name' >{item.checked?<ImCheckboxChecked className='icon checked'/> : <ImCheckboxUnchecked className='icon unchecked' /> }{item.title}</span>
                   </li>
              ))}</ul>


            </div>

           
        </div>
       
    </section>
  );
}

export default Service;
