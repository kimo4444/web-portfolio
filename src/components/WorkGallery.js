import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import RecentWork from "./RecentWork";
import ProjectTile from "./ProjectTile";
import Footer from "./Footer";
import Project from "../texts/projects.js";
import { FaDesktop } from "react-icons/fa";

const WorkGallery = () => {
  return (
    <div>
      <Navigation />
      <div className="landing-page">
        <h1 className="section-title section-title--recent">/ RECENT WORK</h1>
        <RecentWork />
        <h1 className="section-title">/ WORK</h1>
        <div className="work-overview" id="work">
          <div className="work-overview__gallery">
            {Project.map(img => (
              <ProjectTile
                img={img.source}
                title={img.title}
                icon={img.icon}
                desc={img.description}
                cl={img.cl}
                key={img.id}
              />
            ))}
          </div>
        </div>
        <h1 className="section-title">/ SKILLS</h1>
        <div className="skills">
          <img src={require("../images/skills.png")} alt="skills" />
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default WorkGallery;
