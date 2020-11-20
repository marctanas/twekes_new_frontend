import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import Faq from 'react-faq-component';
import Footer from './Footer.js';


const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "How to install Twekes browser extension?",
        content: "At the moment our extension only works on Chrome. We are working on getting our extension Firefox and Safari. 1 Follow this link to install twekes on Chrome: xxxxx 2 Click Add to Chrome then Add extension 3 Twekes is now installed, click on the extension icon on the browser locate on the right side and pin Twekes so that it always shows on your browser toolbar. "
      },
      {
        title: "Is Twekes free?",
        content: "Yes, we will never charge you for using Twekes. It will run seamless on your browser while you benefit from discount deals."
      },
      {
        title: "Does Twekes work on international sites?",
        content: "Yes, we are currently providing stores from USA, UK, India and China. In addition, we will provide you with shipping deals to get your order at the lowest price. If there is a store that we do not support yet, let us know at info@twekes.com so we can add it as soon as possible to our growing store list."
      },
      {
        title: "How do I know Twekes is working?",
        content: "When you shop online you will see Twekes icon on the top right with the number of coupons available. Click on the Twekes logo, you will have an overlay box of available codes. When you arrive at checkout, Twekes will apply the codes and provide you with the best saving on your order."
      },
      {
        title: "Why didn’t the code work at checkout?",
        content: "Sometimes codes have certain rules to them, spend over a certain amount, buy certain number of items, or codes expires. We are always working on improving your shopping experience, so you don’t have to face these issues. Please let us know of any code you see that isn’t working at info@twekes.com"
      },
      {
        title: "Can I refer a friend?",
        content: "Of course, just click on the Twekes logo and select the profile tab. You will see your referral link that you can copy and share with your friend. You will both benefit with redeemable points when your friend shops on Twekes."
      },
      {
        title: "Does Twekes work on mobile or tablet?",
        content: "Twekes extension only works on desktop/laptop machines."
      },
      {
        title: "How do I uninstall Twekes?",
        content: "Chrome on Mac: Click Windows, Click Extensions, Click Remove under Twekes, Click Remove again. Chrome on Windows: Click the three dots on the toolbar, Click More Tools, Click Extensions, Click Remove under Honey, Click Remove again."
      },
      {
        title: "Have another question about Twekes?",
        content: "Please email us at info@twekes.com or use the chat messenger and will be happy to answer your question."
      }
    ]
  }

const About = () =>{

    return (
        <div>
            <header>
            <h2><Link 
                to="/">
                <img src="/img/twekeslogo.png" width="150" height="71" alt="twekes"/>
            </Link></h2>
                <nav>
                    <ul>
                        <li className="faqLink">
                            <Link to="#faq">FAQ</Link>
                        </li>
                        {/* <li className="blogLink">
                            <Link 
                                to="/blog">
                                    Blog
                            </Link>
                        </li> */}
                        <li className="signupLink">
                            <Link 
                                to="accounts/signup">
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
                <h3 className="title">About US</h3>
                    <p className="descriptionArea">We began Twekes because as shoppers like you we were not getting the products, deals or shipping rates we desire. Twekes will personalize your shopping experience and provide you with the best deal discounts for your favorite products. Our branding list is growing not only to cater you locally but also bring your international brands to you. All of this is done via our non-invasive browser extension listing multiple coupons while you go about filling your shopping cart. We will never charge you; we partner with brands and get a percentage of each sale. Happy Shopping <br/><br/></p>
                    <p className="descriptionArea">If you are interested in joining our team, click here<br/><br/></p>

            </section> 

            <section className="secondArea" id="faq">
                <h3 className="title">FAQ</h3>
                    <div>
                        <Faq data={data}/>
                    </div>
            </section>

            <Footer/>

        </div>
    )
}

export default About;
