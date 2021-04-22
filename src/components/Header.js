import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h3 className="title">CV CREATOR</h3>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="#">
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Github</span>
            </span>
            </a>
          </div>
          <div className="navbar-item">
            <a href="#">
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span>LinkedIn</span>
            </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
