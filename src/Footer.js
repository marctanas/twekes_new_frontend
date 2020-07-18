import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    let thisYear = new Date();

    const scrollToTop = () =>{ 
        window.scrollTo(0, 0); 
    } 

    return (
        <footer>
            <ul>
                <p>Follow Us On</p>
            </ul>
            <ul className="socialmedia">
                <li><a href="https://twitter.com/jointwekes" target="/blank"><i className="fab fa-twitter-square fa-sm"></i></a></li>
                <li><a href="https://www.facebook.com/twekes" target="/blank"><i className="fab fa-facebook-square fa-sm"></i></a></li>
                <li><a href="https://www.instagram.com/jointwekes/" target="/blank"><i className="fab fa-instagram-square fa-sm"></i></a></li>
            </ul>
            <ul className="links">
                <li onClick={scrollToTop()}><Link to="/about">About</Link></li>
                <li onClick={scrollToTop()}><Link to="/about#faq">FAQ</Link></li>
                <li onClick={scrollToTop()}><Link to="/legal/terms">Terms</Link></li>
                <li onClick={scrollToTop()}><Link to="/legal/privacy">Privacy</Link></li>
                <li onClick={scrollToTop()}><Link to="/blog">Blog</Link></li>
            </ul>
            <ul className="copyright">
                {thisYear.getFullYear()} &copy; Twekes Technology Inc. All Rights Reserved
            </ul>
        </footer>


    );
}

export default Footer;
