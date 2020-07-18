import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import Footer from './Footer';



const PasswordRecovery = () => {


    // These will be assigned values by React
    let emailField;

    // Connected to globalState
    const [globalState, setGlobalState] = useContext(AppContext);

    // A local state
    const [state, setState] = useState(
        {
            pswdRecovery: false,
            loading: false
        }
    )

    const recoverUser = () => {

         // Start loading
         setState({...state, loading: true})

         fetch(`${process.env.REACT_APP_API_URL}accounts/login`, 
         {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: emailField.value
                }
            ),
            headers: {"Content-Type": "application/json"},
        }
        )
        .then(
            (result) => result.json(),
        )
        .then(
            (json) => {
                // console.log('response from backend', json)
                setState(
                    {
                        pswdRecovery: true
                    }
                )
            }
        )
    }
 
 
     // If the user is loggedIn, redirect them
     if(globalState.loggedIn === true) {
         return(<Redirect to="/"/>)
     }
 
     // Otherwise, show the login form
     else {
        return(
            <div>
                <div className="background-image" style={{backgroundImage: `url(/img/hero.jpg)`}}> 
                    <section className="login-form">
                        <div>
                            <div className="box">
                                <div className="img">
                                    <Link 
                                        to="/">
                                        <img src="/img/twekeslogo.png" alt="twekes"/>
                                    </Link>                                   
                                </div>
                                <div className="heading">
                                    <h4>Password Recovery</h4>
                                </div>
                                <div className="form-fields">
                                    <div className="input-box">
                                        <input type="text" 
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                            ref={ 
                                                (elem) => emailField = elem 
                                            }
                                        />
                                        <span><img src="/img/email.png" alt="email"/></span>
                                    </div>

                                    <div className="button-box">
                                        <button type="button"
                                            onClick={recoverUser}
                                        >Send Recovery Link</button>
                                    </div>
                                </div>
                                <div className="social-links">
                                <p><br/>
                                    <Link 
                                        to="/accounts/login">
                                        Back To Login
                                        </Link>
                                    </p>
                                    <p>
                                    <Link 
                                        to="/accounts/signup">
                                        Create New Account
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PasswordRecovery;


