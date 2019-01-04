import React from "react";
import Project from "../texts/projects.js";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <div className="recent-project">
      <div className="recent-project__description">
        <h3 className="header header--dark">B2BPATTERN.com</h3>
        b2bPattern is a pattern production company that offers a shopping
        platform for established apparel brands and startups.
        <h4 className="header header--dark">FEATURES:</h4>
        Authentication and admin panel. Shopping cart and Stripe API checkout
        integration.
        <h4 className="header header--dark">BUILT WITH:</h4>
        Node, Express, MongoDB, Stripe API, AWS SDK.
        <a
          href="https://b2bpattern.com"
          className="button"
          target="_blank"
          rel="noopener"
        >
          VIEW LIVE
          <span className="arrow"> &#10230;</span>
        </a>
      </div>
      <img
        className="recent-project__img"
        src={require("../images/monitors.jpg")}
        alt="recent project"
      />
    </div>
  );
};

export default RecentWork;
