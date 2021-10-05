import React from 'react';
import logo from '../images/logo.webp'
import app_store from '../images/apple_store.webp'
import google_store from '../images/google_play.webp'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const {t}=useTranslation()
    return (
        <div className='footer'>
        <div className='footer-flex'>
            <img className='footer-logo' src={logo} alt='logo' />
            <div className='footer-item'>
                <h2>{t("What We Do")}</h2>
                <div>{t("Our Services")}</div>
                <div>{t("Registration")}</div>
            </div>
            <div className='footer-item'>
                <h2>{t("Quick Links")}</h2>
                <div>{t("Request A Quote")}</div>
                <div>{t("Terms And Conditions")}</div>
            </div>
            <div className='footer-item'>
                <div>{t("Coming Soon On")}</div>
                <img  className='store_logo' src={app_store} alt='app-store'/>
                <img className='store_logo' src={google_store} alt='google-store'/>
            </div>
        </div>
        <div className='footer-bottom'>{t("All Rights Reserved 2021")}</div>
    </div> 
    );
}

export default Footer;
