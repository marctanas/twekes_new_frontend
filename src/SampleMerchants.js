import React from 'react';

const SampleMerchants = () => {
    return(
         <section className="our-merchants">
            <h3 className="title">Some of our Merchants</h3>
            <p>Earn up to XX% in cashback rewards</p>
            <ul className="grid">
                <li className="large" style={{backgroundImage: `url(/img/samplemerchants.png)`}}></li>
            </ul>
        </section> 

    );
}

export default SampleMerchants;