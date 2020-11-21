import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

//import { Link } from 'react-router-dom';



const HeroUnit = () => {


    const [state, setState] = useState(
        {
            label: 'Claim your $5',
            enteredEmail: false
            
        }
    )

    //variable reserved for the email field
    let emailEntry;

    const inputField = () => {

        if (emailEntry.value === ""){
            setState (
                {
                    ...state,
                    label: state.label
                }
            )
        }else{

            setState (
                {
                    ...state,
                    label: 'GREAT',
                    enteredEmail: true           
                }
            )

        }
    }

    // If the user enters email, redirect them
    if(state.enteredEmail === true) {
        return(<Redirect to="/accounts/signup"/>)
    }

    else{
        return(
            <section className="one" style={{alignItems: `center`}}>
                <div className="backgroundImage" style={{backgroundImage: `url(/img/onlineshopping.jpg)`}}> </div>
                <h1 style={{alignItems: `flex-end`}}>Your Favorite Product</h1>
                <h1>To Your Door, For LESS</h1>
                <h3>Let Twekes do BOTH for you – Shop and Shipping Discounts</h3>
                <a href="/" className="btn">
                    Add to Chrome – it’s free
                </a>
                {/* <div className="InputAddOn">
                    <input type="text"
                        id="the-field"
                        className="InputAddOn-field"  
                        placeholder="Sign up today"
                        ref={ 
                            (elem) => emailEntry = elem 
                        }
                    />
                    <button type="button"
                        id="button-email"
                        className="InputAddOn-item"
                        onClick={inputField}
                        >{state.label}
                    </button>
                </div> */}
            </section>
        );
    }

}

export default HeroUnit;
