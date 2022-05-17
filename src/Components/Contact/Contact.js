import React from "react";
import appointment from "../../assets/images/appointment.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div style={{ background: `url(${appointment})` }} className="mt-10">
      <p className="text-primary text-center font-bold pt-5">Contact Us</p>
      <h2 className="text-white text-center text-2xl mb-5">
        Stay connected with us
      </h2>
      <div className="pb-12 mb-10">
        <form className="">
          <input
            className="w-2/5 block mx-auto rounded h-10 pl-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />{" "}
          <br />
          <input
            className="w-2/5 block mx-auto rounded h-10 pl-5"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />{" "}
          <br />
          <textarea
            className="w-2/5 block mx-auto rounded pl-5"
            id="review"
            name="review"
            rows="4"
            cols="50"
            placeholder="Your Message"
          ></textarea>
          <button className="btn btn-primary block mx-auto mt-5">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
