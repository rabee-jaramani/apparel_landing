import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import emailjs, { init } from "emailjs-com";
import gsap from "gsap/all";


const ContactUsForm = () => {
  init("user_WXMrG9H2675m2AFa27nY0");
  const {t}=useTranslation()

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.number()
      .max(99999999999999, "Must be 15 numbers or less")
      .min(111111111, "Must be 8 numbers or more")
      .required("Required"),
      message: Yup.string()
        .max(300, "Must be 300 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      var templateParams = {
        email: values.email,
        phone:values.phone,
        message: values.message,
      };
      gsap.to(".form-btn", {
        opacity: 0.5,
        pointerEvents: "none",
        duration: 0.1,
      });
      emailjs.send("service_ebc0b89", "template_i9k1rca", templateParams).then(
        (result) => {
          console.log("this is the response", result.text);
          alert("Thank you for your message 😊");
          gsap.to(".form-btn", { opacity: 1, pointerEvents: "all" });
        },
        (error) => {
          console.log("this is error", error.text);
        }
      );
    },
  });
  return (
    <form className="form-flex" onSubmit={formik.handleSubmit}>
      <div className="form-item">
        <label htmlFor="name" className='text'>{t("Email Address")}</label>
        <br />
        <input
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
          id="email"
          type="email"
          placeholder="Mark@gmail.com"
        ></input>
                  {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
      </div>
      <div className="form-item">
        <label htmlFor="phone" className='text'>{t("Phone")}</label>
        <br />
        <input
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phone}
          type="tel"
          id="phone"
          placeholder="051212***"
        ></input>
                  {formik.touched.phone && formik.errors.phone ? (
            <div className="error-message">{formik.errors.phone}</div>
          ) : null}
      </div>

      <div className="form-item">
        <label htmlFor="message" className='text'>{t("Message")}</label>
        <br />
        <textarea
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.message}
          id="message"
          name="message"
          placeholder="Hello..."
          rows="5"
        ></textarea>
                  {formik.touched.message && formik.errors.message ? (
            <div className="error-message">{formik.errors.message}</div>
          ) : null}
      </div>

      <div></div>
      <button className="form-btn">{t("Submit")}</button>
    </form>
  );
};

export default ContactUsForm;
