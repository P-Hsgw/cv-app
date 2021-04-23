import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h3 className="title ml-2 mt-2">CV CREATOR</h3>
        </div>
        <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <p>Website created by Patryk Hasegawa</p>
          </div>
          <div className="navbar-item p-0">
            <a href="https://github.com/P-Hsgw" target="blank">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span> 
            </a>
          </div>
          <div className="navbar-item">
            <a href="https://linkedin.com/in/patryk-hasegawa" target="blank">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
          </div>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;
