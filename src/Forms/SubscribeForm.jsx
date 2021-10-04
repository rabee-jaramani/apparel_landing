import React from "react";

const SubscribeForm = () => {
  return (
    <form className="form-grid">
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <br />
        <input required id="name" placeholder="Mark"></input>
      </div>
      {/* 
            <div className='form-item'>
                <label htmlFor='name'>Product Type</label><br/>
                <input required id='product-type' placeholder='Electronics,fashion etc... '></input>
            </div> */}

      {/* <div className='form-item'>
                <label htmlFor='name'>Location</label><br/>
                <input required id='location' placeholder='Dubai'></input>
            </div> */}

      <div className="form-item">
        <label htmlFor="name">Contact Number</label>
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
        <label htmlFor="name">Email Address</label>
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
      <button className="form-btn">Submit</button>
    </form>
  );
};

export default SubscribeForm;
