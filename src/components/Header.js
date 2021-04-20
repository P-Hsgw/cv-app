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
        <div class="navbar-end">
          <div class="navbar-item">
            <span class="icon-text">
              <span class="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Github</span>
            </span>

            <span class="icon-text">
              <span class="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span>Linkedin</span>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
