import React from 'react';

const HowItWorks = () => {
    return(
        <section className="features" id="howitworks">
            <h3 className="title">How to shop on Twekes</h3>
            <ul className="grid">
                <li>
                    <i className="fas fa-stream fa-4x"></i>
                    <h4><br/>Add Twekes<br/></h4>
                    <p>Install Twekes to Chrome</p>
                </li>
                <li>
                    <i className="fas fa-shopping-basket fa-4x"></i>
                    <h4><br/>Shop as Usual<br/></h4>
                    <p>Integrates seamless while we test the best discount deals for you</p>
                </li>
                <li>
                    <i className="fas fa-percent fa-4x"></i>
                    <h4><br/>Activate the codes you want<br/></h4>
                    <p>Shopping, shipping or both</p>
                </li> 
                <li>
                    <i className="fas fa-percent fa-4x"></i>
                    <h4><br/>Earn points <br/></h4>
                    <p>Which you can redeem for MORE discounts</p>
                </li> 
            </ul>
        </section>

    );
}

export default HowItWorks;