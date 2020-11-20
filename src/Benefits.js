import React from 'react';

const Benefits = () => {
    return(
        <section className="features">
            <h3 className="title">Benefits</h3>
            <ul className="grid">
                <li>
                    <i className="fa fa-camera-retro fa-4x"></i>
                    <h4><br/>Shop Your Favorite Brands Globally<br/></h4>
                    <p>We’ll connect you with the best discounts</p>
                </li>
                <li>
                    <i className="fas fa-globe fa-4x"></i>
                    <h4><br/>Save and Earn</h4>
                    <p>The best saving deals on the internet</p>
                </li>
                <li>
                    <i className="fas fa-fan fa-4x"></i>                    
                    <h4><br/>No More Time Lost</h4>
                    <p>Don’t waste your time, Twekes will do it for you</p>
                </li> 
            </ul>
        </section>

    );
}

export default Benefits;