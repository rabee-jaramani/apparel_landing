import React from "react";
import { useTranslation } from "react-i18next";

const SubscribeForm = () => {
  const {t}=useTranslation()

  return (
    <form className="form-grid">
      <div className="form-item">
        <label htmlFor="name">{t("Name")}</label>
        <br />
        <input required id="name" placeholder="Mark"></input>
      </div>

      <div className="form-item">
        <label htmlFor="name">{t("Phone")}</label>
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
        <label htmlFor="name">{t("Email Address")}</label>
        <br />
        <input
          required
          id="email"
          type="email"
          placeholder="Mark@gmail.com"
        ></input>
      </div>

      {/* <div className='form-item'>
                <label htmlFor='name'>Trade License </label><br/>
                <input required type="file" id='file' placeholder='Mark' ></input>
            </div> */}
      <div></div>
      <button className="form-btn">{t("Submit")}</button>
    </form>
  );
};

export default SubscribeForm;
