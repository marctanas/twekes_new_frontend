import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";

const Login = () => {

    // These will be assigned values by React
    let emailField;
    let passwordField;

    // Connected to globalState
    const [globalState, setGlobalState] = useContext(AppContext);

    // A local state
    const [state, setState] = useState(
        {
            error: [],
        }
    );

    const loginUser = () => {

        fetch(`${process.env.REACT_APP_API_URL}accounts/login`, {
            method: "POST",
            body: JSON.stringify({
                email: emailField.value,
                password: passwordField.value,
            }),
            headers: { "Content-Type": "application/json" },
        })

            .then((result) => result.json())
            .then((json) => {
                const { message, jsonwebtoken } = json;
                if (jsonwebtoken) {
                    if (emailField.value === globalState.emailAdmin){
                        // update the globalState
                        setGlobalState({
                            ...globalState,
                            userAdmin: true,
                            loggedIn: true
                        });
                        // save the jwt in the browser
                        localStorage.setItem("jwt", jsonwebtoken);
                    } else{
                    // update the globalState
                    setGlobalState({
                        ...globalState,
                        loggedIn: true,
                    });

                    // save the jwt in the browser
                    localStorage.setItem("jwt", jsonwebtoken);
                }} else {
                    // throw an error
                    setState({
                        ...state,
                        error: message,
                    });
                }

            });

    };



    // If the user is loggedIn, redirect them
    if (globalState.loggedIn === true) {
        return <Redirect to="/shop" />;
    }

    // Otherwise, show the login form
    else {
        return (
            <div>
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(/img/hero.jpg)` }}>
                    <section className="login-form">
                        <div>
                            <div className="box">
                                <div className="img">
                                    <Link to="/">
                                        <img src="/img/twekeslogo.png" alt="twekes" />
                                    </Link>
                                </div>
                                <div className="heading">
                                    <h4>Welcome Back</h4>
                                </div>
                                <div className="form-fields">
                                    <div className="input-box">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            ref={(elem) => (emailField = elem)}
                                        />
                                        <span>
                                            <img src="/img/email.png" alt="email" />
                                        </span>
                                    </div>
                                    <div className="input-box">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            ref={(elem) => (passwordField = elem)}
                                        />
                                        <span>
                                            <img src="/img/password.png" alt="password" />
                                        </span>
                                    </div>
                                    <div className="button-box">
                                        <button type="submit" onClick={loginUser}>
                                            Login
                                        </button>
                                        <Link to="/accounts/passwordrecovery">
                                            Forgot Password ?
                                        </Link>
                                    </div>
                                    <div>
                                        {
                                            state.error && 
                                            <span>
                                                {
                                                    state.error
                                                }
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="other-links">
                                    <p> or log in with</p>
                                    <div className="links-box">
                                        <a href="" className="facebook">
                                            Facebook
                                        </a>
                                        <a href="" className="google">
                                            Google
                                        </a>
                                    </div>
                                    <p>
                                        <Link to="/accounts/signup">Create New Account</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Login;
