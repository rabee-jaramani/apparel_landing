import React from "react";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const {t}=useTranslation()
  return (
    <form className="form-flex">
      <div className="form-item">
        <label htmlFor="name" className='text'>{t("Email Address")}</label>
        <br />
        <input
          required
          id="email"
          type="email"
          placeholder="Mark@gmail.com"
        ></input>
      </div>
      <div className="form-item">
        <label htmlFor="name" className='text'>{t("Phone")}</label>
        <br />
        <input
          type="tel"
          required
          pattern="[0-9]{10}"
          id="contact-number"
          placeholder="051212***"
        ></input>
      </div>

      <div className="form-item">
        <label htmlFor="message" className='text'>{t("Message")}</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Hello..."
          rows="5"
        ></textarea>
      </div>

      <div></div>
      <button className="form-btn">{t("Submit")}</button>
    </form>
  );
};

export default ContactUsForm;
