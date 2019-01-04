import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default class Navigation extends React.Component {
  state = {
    isMenuOpen: false
  };
  onMenuOpen = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };
  onLinkSelect = () => {
    this.setState(() => ({ isMenuOpen: false }));
  };

  render() {
    var menuClass = classNames({
      "menu-open": this.state.isMenuOpen,
      "menu-icon": true
    });
    var overlayClass = classNames({
      menu__overlay: this.state.isMenuOpen
    });
    var slideClass = classNames({
      menu__items: this.state.isMenuOpen
    });

    return (
      <div className="nav">
        <h1 className="nav__intro">
          <span>
            Hi there, I am Olga,
            <br /> NYC based <br />
            web developer.
            <br />
          </span>
        </h1>

        <div className={menuClass} onClick={this.onMenuOpen}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className={overlayClass}>
          <div className="menu__items">
            <a href="/#work" className="menu__item" onClick={this.onLinkSelect}>
              WORK
            </a>
            <Link className="menu__item" to="/about">
              ABOUT
            </Link>
            <Link className="menu__item" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
