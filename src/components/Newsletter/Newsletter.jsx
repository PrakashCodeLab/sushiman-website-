import "./Newsletter.scss";



const Newsletter = () => {
  return (
    <section  id="services"  className="newsletter__section">
         <h2 data-aos="flip-up" className="newsletter__heading">get offers straight to  your inbox</h2>
         <p data-aos="flip-down" className="newsletter__para">Sign up for the Sushiman newsletter</p>

         <form data-aos="fade-up"  action="get" className="newsletter__form">
            <input  className='input__newsletter'  type='email' placeholder="enter your Email address" />
            
          <button className='btn btn__submit' type='submit'>get started</button>
        
         </form>
    </section>
  );
}

export default Newsletter;
