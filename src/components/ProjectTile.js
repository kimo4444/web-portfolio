import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { FaCode } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

const ProjectTile = ({ img, title, desc, cl, icon, in: inProp }) => {
  return (
    <div className="work-overview__tile">
      {img && (
        <Link aria-label="project" to={`/project/${title}`}>
          <LazyLoad>
            <img src={`/${img}`} alt={{ title }} />
          </LazyLoad>
        </Link>
      )}

      <div className={cl ? cl : "tile__text"}>
        {icon && icon === "FaCode" ? (
          <div className="work-overview__icon">
            <FaCode />
          </div>
        ) : icon && icon === "FaDesktop" ? (
          <div className="work-overview__icon">
            {" "}
            <FaDesktop />
          </div>
        ) : (
          <p />
        )}
        {img && (
          <Link to={`/project/${title}`}>
            <h4 className="header header--dark">{title}</h4>
          </Link>
        )}
        <span>
          <p>{desc}</p>
          <Link to={`/project/${title}`} className="button button--to-project">
            PROJECT OVERVIEW <span className="hidden">OF {title} </span>
            <span className="arrow">&#10230;</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ProjectTile;
