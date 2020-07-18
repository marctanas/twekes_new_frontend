import React from 'react';

const HowItWorks = () => {
    return(
        <section className="features" id="howitworks">
            <h3 className="title">Using twekes is easy</h3>
            <ul className="grid">
                <li>
                    <i className="fas fa-stream fa-4x"></i>
                    <h4><br/>Activate<br/></h4>
                    <p>Install Twekes website browser for easy code activation</p>
                </li>
                <li>
                    <i className="fas fa-shopping-basket fa-4x"></i>
                    <h4><br/>Shop<br/></h4>
                    <p>Shop and spend online</p>
                </li>
                <li>
                    <i className="fas fa-percent fa-4x"></i>
                    <h4><br/>Earn<br/></h4>
                    <p>Receive automatic cashback when you checkout with Twekes!</p>
                </li> 
            </ul>
        </section>

    );
}

export default HowItWorks;