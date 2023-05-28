import React from 'react';
import  "./Popular.scss" ;

const ButtonCard = ({Img , Foodtime}) => {
  return (
    <>
       <button className='btn__foods'>
                <img src={Img} alt="image" />
                <span>{Foodtime}</span>
       </button>
    </>
  );
}

export default ButtonCard;
