import React from 'react';
import logo from '../images/logo.webp'
import app_store from '../images/apple_store.webp'
import google_store from '../images/google_play.webp'
const Footer = () => {
    return (
        <div className='footer'>
        <div className='footer-flex'>
            <img className='footer-logo' src={logo} alt='logo' />
            <div className='footer-item'>
                <h2>What We Do</h2>
                <div>Our Services</div>
                <div>Registration</div>
            </div>
            <div className='footer-item'>
                <h2>Quick Links</h2>
                <div>Request A Quote</div>
                <div>Terms And Conditions</div>
            </div>
            <div className='footer-item'>
                <div>Coming Soon On</div>
                <img  className='store_logo' src={app_store} alt='app-store'/>
                <img className='store_logo' src={google_store} alt='google-store'/>
            </div>
        </div>
        <div className='footer-bottom'>All Rights Reserved 2021</div>
    </div> 
    );
}

export default Footer;
