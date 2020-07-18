import React, { useContext } from 'react';
//import AppContext from './AppContext';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // const logOut = () => {
    //     setGlobalState(
    //         {
    //             ...globalState,
    //             loggedIn: false
    //         }
    //     );

    //     localStorage.clear();
    // }

    return (
        <header>
            <h2><Link 
                to="/">
                <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
            </Link></h2>
            <nav>
                <ul>
                    <li className="howItWorksLink">
                        <a href="#howitworks">How it Works</a>
                    </li>
                    <li className="blogLink">
                        <Link 
                            to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className="signupLink">
                        <Link 
                            to="/accounts/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="loginLink">
                        <Link 
                            to="/accounts/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default NavBar;