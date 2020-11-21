import React from 'react';
import { Link } from 'react-router-dom';


const Listing = (prop) => {


  const activateMerchant = () => {
    // alert(prop.name + " has been activated. You are being redirected");
    alert("You are being redirected to " + prop.name + ". Open the extension to see the coupons available");


  }

    return (
        <div className="container">
            <h3>{prop.name}</h3> 
            {/* <p>Promo Code: <span>{prop.code}</span></p> */}
            <div onClick={activateMerchant}>
                <Link 
                    className="btn"
                    to="/shop">
                    Shop
                </Link>
            </div>
            <br/>
            <br/>
            <hr/>
        </div>
    )
}

export default Listing;