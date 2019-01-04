import React, { Component } from "react";
import MinNavigation from "./MinNavigation";
import Footer from "./Footer";

const Contact = props => {
  return (
    <div className="landing-page">
      <MinNavigation />
      <div className="about-section">
        <p>
          Web developer focused on creating user-friendly interfaces, writing
          clean, reusable component/module based code and implementing SEO best
          practices.
        </p>
        <p>
          I build web applications ranging from minimal agency landing pages and
          single page applications to more complex CRUD based websites that
          include database interactions, user validation, content management and
          web analytics.
        </p>
        <h4 className="header">Technologies I currently use:</h4>
        <ul>
          <li>Front End: Javascript, HTML5, CSS3 & SCSS, Python, React;</li>
          <li>Back end: Node, Express, SQL, MongoDB(mongoose);</li>
          <li>Misc: Git & GitHub, RESTful architecture, Redux;</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
