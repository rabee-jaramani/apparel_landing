import React from "react";

const ContactUsForm = () => {
  return (
    <form className="form-flex">
      <div className="form-item">
        <label htmlFor="name">Email Address</label>
        <br />
        <input
          required
          id="email"
          type="email"
          placeholder="Mark@gmail.com"
        ></input>
      </div>
      <div className="form-item">
        <label htmlFor="name">Phone</label>
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
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Hello..."
          rows="5"
        ></textarea>
      </div>

      <div></div>
      <button className="form-btn">Submit</button>
    </form>
  );
};

export default ContactUsForm;
