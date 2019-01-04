import React, { Component } from "react";
import MinNavigation from "./MinNavigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Contact = props => {
  return (
    <div className="landing-page">
      <MinNavigation />
      <div className="contact-form">
        <h2 className="header">
          Got some project or have a question? Send me an email!
        </h2>
        <form method="POST" action="/send">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name.."
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email.."
            id="email"
            required
          />
          <label htmlFor="text">Text</label>
          <textarea
            name="message"
            placeholder="How can I help you?"
            id="text"
            required
          />
          <input type="submit" value="Submit" className="button--submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
