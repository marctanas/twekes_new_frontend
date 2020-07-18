import React from 'react';
import { Link } from 'react-router-dom';


const Reviews = () => {
    return(
         <section className="reviews">
            <h3 className="title">What our users say about us</h3>
                <p className="quote">"Instantly became a favorite – it’s ridiculously easy to set up, and I don’t have worry about searching for coupon codes. These guys have absolutely nailed it!"<br/><br/></p>
                <p className="quote">"Hands down one of my favorite apps out there. Seamless and easy to use."<br/><br/></p>
                <p className="quote">"I've used a few of these rewards style apps before but none of them compare to Twekes. I constantly recommend Twekes to people I know and they end up falling in love also."<br/><br/></p>
                <Link to="/accounts/signup" className="btn">Claim your $5</Link>
        </section> 

    );
}

export default Reviews;