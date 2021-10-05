import React from "react";
import logo from "../images/logo.webp";
import video from "./video.mp4";
import ksa from "./ksa.png";
import usa from "./usa.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Section1 = () => {
const handleLanguage=(lang)=>{
  i18next.changeLanguage(lang)
}



  const { t } = useTranslation();
  return (
    <section className="section1">
      <div className="dropdown">
        <button
          className="btn btn-secondary "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-globe"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            className="dropdown-item"
            href="/"
            onClick={() => handleLanguage("en")}
          >
            English <img src={usa} alt="" />
          </a>
          <a
            className="dropdown-item"
            href="/"
            onClick={() => handleLanguage('sa')}
          >
            العربية
            <img src={ksa} alt="" />
          </a>
        </div>
      </div>
      <div className="header">
        <img loading="lazy" className="logo" src={logo} alt="logo" />
        <div className="how-to-join-btn text">{t(`how to join btn`)}</div>
      </div>
      <div className="header-message">
        <div className="about-us text">{t(`about us`)}</div>
        <hr className="hr" />
        <h1 className="h1 text">{t("Zero %")}</h1>
        <h1 className="h1 text">{t("Commission")}</h1>
        <h2 className="h2">
          {t("You will receive best service with")}{" "}
          <span className="soon text">{t("Soon")}</span>
        </h2>
        <div className="subscribe-btn text">{t("Subscribe")}</div>
        <div className="video-responsive">
          <video
            controls
            autostart="true"
            autoPlay
            src={video}
            type="video/mp4"
            muted={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
