import React from "react";
import img from "../images/img.webp";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import SubscribeForm from "../Forms/SubscribeForm";
import ContactUsForm from "../Forms/ContactUsForm";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const {t}=useTranslation()
  return (
    <section className="section3">
      <img loading="lazy" className="sec3-img" src={img} alt="img" />
      <div className="sec3-flex">
        <div className="flex-item">
          <img loading="lazy" src={img1} alt="img" />
          <h2>{t("Subscribe with us")}</h2>
          <span className="num">1</span>
          <span className="sec3-p">
          {t("Fill up the form below and provide all requested information.")}
          </span>
        </div>
        <div className="flex-item">
          <img loading="lazy" src={img2} alt="img" />
          <h2>{t("Process your request")}</h2>
          <span className="num">2</span>
          <span className="sec3-p">{t("We will add your email to our databse")}</span>
        </div>
        <div className="flex-item">
          <img loading="lazy" src={img3} alt="img" />
          <h2>{t("Receive Newsletters")}</h2>
          <span className="num">3</span>
          <span className="sec3-p">
           {t("Start receiving")}
          </span>
        </div>
      </div>
      <h1 className="subscribe-title">{t("Subscribe Form")}</h1>
      <div className="sec3-line line"></div>
      <SubscribeForm />

      <h1 className="subscribe-title contactus-title" id="contact-us">
        {t("Contact Us")}
      </h1>
      <div className="sec3-line line"></div>
      <ContactUsForm />
    </section>
  );
};

export default Section3;
