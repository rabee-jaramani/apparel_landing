import gsap from "gsap/all";
import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, { init } from "emailjs-com";

const SubscribeForm = () => {
  init("user_WXMrG9H2675m2AFa27nY0");
  const {t}=useTranslation()
  const formik = useFormik({
    initialValues: {
      name: "",
      phone_s: "",
      email_s: "",
      
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(30, "Must be 30 characters or less")
      .min(5, "Must be 5 characters or more")
      .required("Required"),
      phone_s: Yup.number()
      .max(99999999999999, "Must be 15 numbers or less")
      .min(111111111, "Must be 8 numbers or more")
      .required("Required"),
      email_s: Yup.string().email("Invalid email address").required("Required"),
     
     
    }),
    onSubmit: (values) => {
      var templateParams = {
        name: values.name,
        phone_s:values.phone_s,
       email_s: values.email_s,
      };
      gsap.to(".subscribe-btn", {
        opacity: 0.5,
        pointerEvents: "none",
        duration: 0.1,
      });
      emailjs.send("service_ebc0b89", "template_i9k1rca", templateParams).then(
        (result) => {
          console.log("this is the response", result.text);
          alert("Thank you "+ values.name+" for your message 😊");
          gsap.to(".subscribe-btn", { opacity: 1, pointerEvents: "all" });
        },
        (error) => {
          console.log("this is error", error.text);
        }
      );
    },
  });
  return (
    <form className="form-grid" onSubmit={formik.handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">{t("Name")}</label>
        <br />
        <input  
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name} 
         id="name" placeholder="Mark"></input>
            {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
      </div>

      <div className="form-item">
        <label htmlFor="phone">{t("Phone")}</label>
        <br />
        <input
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phone_s}
          type="tel"
          id="phone_s"
          placeholder="051212***"
        ></input>
           {formik.touched.phone_s && formik.errors.phone_s ? (
            <div className="error-message">{formik.errors.phone_s}</div>
          ) : null}
      </div>

      <div className="form-item">
        <label htmlFor="name">{t("Email Address")}</label>
        <br />
        <input
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email_s}
          id="email_s"
          type="email"
          placeholder="Mark@gmail.com"
        ></input>
           {formik.touched.email_s && formik.errors.email_s ? (
            <div className="error-message">{formik.errors.email_s}</div>
          ) : null}
      </div>

      {/* <div className='form-item'>
                <label htmlFor='name'>Trade License </label><br/>
                <input required type="file" id='file' placeholder='Mark' ></input>
            </div> */}
      <div></div>
      <button className="form-btn subscribe-btn">{t("Submit")}</button>
    </form>
  );
};

export default SubscribeForm;
