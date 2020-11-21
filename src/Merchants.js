import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import MerchantsUpdate from './MerchantsUpdate.js';
import { Link } from 'react-router-dom';
import MerchantsCreate from './MerchantsCreate';


const Merchants = () => {


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
          // only fetch products if and when the user logs in
          if(globalState.loggedIn === true) {
            fetch(`${process.env.REACT_APP_API_URL}merchants/`,{
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
        [ globalState.loggedIn ],
        console.log(state.merchants)
      )

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
                                globalState.loggedIn === true && 
                                <Link 
                                    to="/shop">
                                    Shop
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
            {   
                globalState.userAdmin === true && 
                <div>
                    <section>

                    <h1>Create Merchant</h1><br/><br/>

                    <MerchantsCreate/>

                    </section>

                    <section>

                        <h1>Merchant Update</h1><br/><br/>

                        <div>
                        {
                            globalState.loggedIn === true &&
                            state.merchants.map(
                            (merchant)=>
                                <div >
                                <MerchantsUpdate
                                    id={merchant._id}
                                    name={merchant.brandName}
                                    code={merchant.discountCode}
                                    
                                />
                                </div>
                                
                            )
                        }
                        </div>
                    </section>
                </div>
            }
            {
                globalState.userAdmin === false && 
                <div>
                    <section>
    
                    <h1>This page does not exist</h1><br/><br/>
    
                    </section>
                </div>
            }

        </div> 
    )
}

export default Merchants;
