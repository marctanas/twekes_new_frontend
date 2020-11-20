import React, { useContext } from 'react';
//import AppContext from './AppContext';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

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
                <img src="/img/twekeslogo.png" width="150" height="71" alt="twekes"/>
            </Link></h2>
            <nav>
                <ul>
                    <li className="howItWorksLink">
                        <Link to="/#howitworks">How it Works</Link>
                    </li>
                    {/* <li className="blogLink">
                        <Link 
                            to="/blog">
                            Blog
                        </Link>
                    </li> */}
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