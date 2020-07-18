import React from 'react';

const Benefits = () => {
    return(
        <section className="features">
            <h3 className="title">Benefits</h3>
            <ul className="grid">
                <li>
                    <i className="fa fa-camera-retro fa-4x"></i>
                    <h4><br/></h4>
                    <p>Integrates seamlessly with your browser</p>
                </li>
                <li>
                    <i className="fas fa-globe fa-4x"></i>
                    <h4><br/></h4>
                    <p>Providing the best discount code to use</p>
                </li>
                <li>
                    <i className="fas fa-fan fa-4x"></i>                    
                    <h4><br/></h4>
                    <p>No expiry to your cashback</p>
                </li> 
            </ul>
        </section>

    );
}

export default Benefits;