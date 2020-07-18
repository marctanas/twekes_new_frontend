import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';




    const Blog = () =>{

        let todayDate = new Date();

        return (
            <div>
                <header>
                    <h2><Link to="/">
                        <img src="img/twekeslogo.png" width="130" height="40" alt="twekes"/>
                        </Link></h2>
                    <nav>
                        <ul>
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

                <section className="noMasterImage">
                    <div className="background-image" > </div>

                </section>

                <section className="titleArea">
                    <h3 className="title">Blog</h3>

                    <div className="descriptionBlog">
                        <div className="post-preview">
                            <a href="#">
                            <h2 className="post-title">
                                The Easiest Way To Grab The Coupon
                            </h2>
                            <h3 className="post-subtitle">
                                No need to go search for a coupon code to continue your purchase
                            </h3>
                            </a>
                            <p className="post-meta">
                                {"Post on: " + todayDate.toLocaleDateString("en-GB")}
                            </p>
                        </div>
                        <hr/>
                        <div className="post-preview">
                            <a href="#">
                            <h2 className="post-title">
                                Cashback Will Never Be The Same.
                            </h2>
                            <h3 className="post-subtitle">
                                Customers were in disappointment....Until now
                            </h3>
                            </a>
                            <p className="post-meta">Posted on DATE</p>
                        </div>
                        <hr/>
                        <div className="post-preview">
                            <a href="#">
                            <h2 className="post-title">
                                1000 Cashback Merchants
                            </h2>
                            <h3 className="post-subtitle">
                                Twekes keeps on growing by providing the merchants that you love.
                            </h3>
                            </a>
                            <p className="post-meta">Posted on DATE</p>
                        </div>
                        <hr/>
                        <div className="pager"> 
                            <a className="btn" href="#">Older Posts &rarr;</a>
                        </div>
                    </div>
                </section> 
                <Footer/>
            </div>
        )
    }

export default Blog;
