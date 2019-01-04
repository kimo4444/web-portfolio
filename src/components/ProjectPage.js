import React, { Component } from "react";
import MinNavigation from "./MinNavigation";
import Footer from "./Footer";
import Source from "../texts/projects.js";

export default class ProjectPage extends Component {
  projectTitle = this.props.match.params.project;
  project = Source.filter(pr => pr.title === this.projectTitle);
  defaultImage = this.project[0].source.includes("/")
    ? this.project[0].source
    : `/${this.project[0].source}`;

  state = {
    activeImage: this.defaultImage
  };
  setActiveImage = e => {
    var ImgSrc = e.target.getAttribute("src");
    this.setState(prevState => ({ activeImage: ImgSrc }));
  };

  render() {
    return (
      <div className="landing-page">
        <MinNavigation />
        <div className="project">
          <div className="project__description">
            <h1 className="header">{this.projectTitle}</h1>
            {this.project[0].link && (
              <a
                href={this.project[0].link}
                target="_blank"
                rel="noopener"
                className="project__link"
              >
                view live
              </a>
            )}
            {this.project[0].description}
            <h4 className="header">Features:</h4>
            <ul>
              {this.project[0].features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <h4 className="header">Built with:</h4>
            <span>{this.project[0].technologies}</span>
            <div className="project__images">
              {this.project[0].gallery &&
                this.project[0].gallery.map(image => (
                  <div className="project__image" key={image}>
                    <img
                      src={`/${image}`}
                      alt="project image"
                      className="project__img "
                      onClick={this.setActiveImage}
                    />
                  </div>
                ))}
            </div>
          </div>
          <img
            src={`${this.state.activeImage}`}
            className="project__img--main"
            alt="main project image"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
