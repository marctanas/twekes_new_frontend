import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';


const Terms = () =>{


    return (
        <div>
            <header>
            <h2><Link 
                to="/">
                <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
            </Link></h2>
                <nav>
                    <ul>
                        <li className="blogLink">
                            <Link 
                                to="/blog">
                                    Blog
                            </Link>
                        </li>
                        <li className="signupLink">
                            <Link 
                                to="/accounts/signup">
                                Sign up
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
                <h3 className="title">Terms of Service</h3>
                    <p className="descriptionArea">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque architecto a nostrum, perspiciatis molestiae tempora sed deserunt nihil saepe amet. Nulla quidem repellendus, eum quaerat reprehenderit exercitationem vitae error.<br/><br/></p>
                    <p className="descriptionArea">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, cupiditate eius earum voluptatem rerum voluptate placeat ipsum iste sunt neque ut reiciendis. Esse molestias rerum nemo eligendi accusantium, aperiam alias.<br/><br/></p>
                    <p className="descriptionArea">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit nihil. Corporis tempore eius unde, at voluptas obcaecati! Beatae nam, sapiente iusto explicabo nesciunt quis praesentium recusandae sit culpa ipsum.<br/><br/></p>

            </section> 

            <Footer/>
        </div>
    )
}

export default Terms;
