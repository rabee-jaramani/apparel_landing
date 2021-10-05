import React from "react";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();
  return (
    <section className="section2">
      <div className="sec2-message">
        <h1 className='text'>{t("BINIFITS")}</h1>
        <div className="line"></div>
        <p>
          {t("p1")}
        </p>
        <div className="sec2-btn ">{t("Contact us btn")}</div>
      </div>
      <div className="bottom-msg">
        <h2 id="how_to_join">{t("Three Steps To Subscribe")}</h2>
        <p>{t("Below are the three easy steps for receiving the newsletters")}</p>
      </div>
    </section>
  );
};

export default Section2;
