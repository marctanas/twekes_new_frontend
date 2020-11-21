import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Listing from './Listing.js';
import { Link } from 'react-router-dom';


const Shop = () => {

    //const [globalState, setGlobalState] = useContext(AppContext);

    const [globalState, setGlobalState] = useContext(AppContext);
    const [state, setState] = useState({ merchants: []})

    const logOut = () => {
        
        setGlobalState(
            {
                ...globalState,
                userAdmin: false,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    useEffect(
        () => {
          // only fetch merchants if and when the user logs in
          if(globalState.loggedIn === true) {
            fetch(`${process.env.REACT_APP_API_URL}merchants`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${[localStorage.getItem('jwt')]}`
            }
            
            })
            .then(
              (result)=>result.json()
            )
            .then (
              (json)=> {
                setState(
                  {
                    ...state,
                    merchants: json.merchants,
                  }
                )
              }
            );
          }
        },
        [ globalState.loggedIn ]
      )
      console.log("shop userAdmin: " , globalState.userAdmin);

    return (   
        <div>
            <header>
                <h2><Link 
                    to="/shop">
                    <img src="/img/twekeslogo.png" width="150" height="71" alt="twekes"/>
                </Link></h2>
                <nav>
                    <ul>
                        
                        <li className="loginLink">
                            {
                                globalState.userAdmin === true && globalState.loggedIn === true && 
                                <Link 
                                    to="/shop/merchants">
                                    Merchants
                                </Link>
                            }   
                        </li>

                        <li className="loginLink">
                            {
                                globalState.loggedIn === true && 
                                <Link 
                                    to="/accounts/profile">
                                    Profile
                                </Link>
                            }   
                        </li>
                        <li className="loginLink">
                            {   
                                globalState.loggedIn === true && 
                                <div onClick={logOut}>
                                    <Link 
                                        to="/">
                                        Log Out
                                    </Link>
                                </div>
                            }   
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="noMasterImage">
                <div className="background-image" > </div>
            </section>

            <section>

                <h1>Merchants Listing</h1><br/><br/>

                <div>
                {
                    globalState.loggedIn === true &&
                    state.merchants.map(
                    (merchant)=>
                        <div >
                        <Listing
                            name={merchant.brandName}
                            code={merchant.discountCode}
                            
                        />
                        </div>
                        
                    )
                }
                </div>

            </section>
        </div> 
    )
}

export default Shop;


