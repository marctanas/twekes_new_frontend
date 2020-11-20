import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import { validFullName, validEmail, validPassword} from './Utils';


const Signup = () => {

    const [state, setState] = useState(
        {
            registered: false,
            errors: 0,
            messages: []
        }
    );

    let nameField;
    let emailField;
    let passwordField;

    const registerUser = () => {

        let errors = 0;
        let messages = [];

        if(!validFullName(nameField.value)) {
            errors++;
            messages.push('Please enter a valid full name')
        }
        if(!validEmail(emailField.value)) {
            errors++;
            messages.push('Please enter a valid email')
        }
        if(!validPassword(passwordField.value)) {
            errors++;
            messages.push('Please enter a valid password')
        }

        if(errors > 0){
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages
                }
            )
            return;
        }

        else{
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: []
                }
            )

        }


        fetch(`${process.env.REACT_APP_API_URL}accounts/register`, 
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    fullName: nameField.value, 
                    email: emailField.value, 
                    password: passwordField.value
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
                const { message } = json;
                if(message === "User has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true
                        }
                    )
                } else {
                    setState(
                        {
                            ...state,
                            registered: false
                        }
                    )
                }
            }
        )
    }

    // If the user is loggedIn, redirect them
    if(state.registered === true) {
        return(<Redirect to="/accounts/login"/>)
    }

    else{
        return(

        <div>
            <div className="background-image" 
                // style={{ backgroundImage: `url(/img/hero.jpg)` }}
                style={{ backgroundColor: `#0F6EDE` }}>
                <section className="signup-form">
                    <div>
                        <div className="box">
                            <div className="img">
                            <Link 
                                to="/">
                                <img src="/img/twekeslogo.png" alt="twekes"/>
                            </Link>                        
                            </div>
                            <div className="heading">
                                <h4>Create New Account</h4>
                            </div>
                            <div className="form-fields">
                                <div className="input-box">
                                    <input type="text" 
                                        className="form-control"
                                        placeholder={"Enter Your Full Name"}
                                        ref={ 
                                            (elem) => nameField = elem 
                                        }
                                    />
                                    <span><img src="/img/user.png" alt="user"/></span>
                                </div>
                                <div className="input-box">
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder={"Enter Your Email"}
                                        ref={ 
                                            (elem) => emailField = elem 
                                        }
                                    />
                                    <span><img src="/img/email.png" alt="email"/></span>
                                </div>
                                <div className="input-box">
                                    <input type="password" 
                                        placeholder="Any String Between 8 and 12 Characters" 
                                        className="form-control"
                                        ref={ 
                                            (elem) => passwordField = elem 
                                        }
                                    />
                                    <span><img src="/img/password.png" alt="password"/></span>
                                </div>
                                <div className="button-box">
                                    <button type="button"
                                        onClick={registerUser}>
                                        Sign Up
                                    </button>
                                    <Link to="/accounts/login">Log In To Account</Link>
                                </div>
                                {
                                    state.errors > 0 &&
                                    <div>
                                        {
                                            state.messages.map(
                                                (message)=><span>{message}<br/></span>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                            <div className="other-links">
                                <p> or Sign up with</p>
                                <div className="links-box">
                                    <a href="" className="facebook">Facebook</a>
                                    <a href="" className="google">Google</a>
                                </div>
                                <div className="legal">
                                    <p> By signing up, you agree to our <Link to="/legal/terms">Terms</Link> and <Link to="/legal/privacy">Privacy Policy</Link></p>
                                </div>
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

export default Signup;


