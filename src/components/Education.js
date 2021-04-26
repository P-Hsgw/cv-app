import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { EduButton } from "./ToggleButtons"

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      university: this.props.university,
      major: this.props.major,
      studied_from: this.props.studied_from,
      studied_to: this.props.studied_to,
      location: this.props.location,
      details: this.props.details,
      id: this.props.id,
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onTrigger = (e) => {
    this.props.handleData(
      this.state.university,
      this.state.major,
      this.state.studied_from,
      this.state.studied_to,
      this.state.location,
      this.state.details,
      this.state.id
    );
  };

  render() {
    return (
      <div className="container">
        <p className="title has-text-primary">Education</p>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label"></label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  name="university"
                  type="text"
                  placeholder="University"
                  onChange={this.inputHandler}
                  value={this.state.university}
                />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-right">
                <input
                  className="input"
                  name="major"
                  type="text"
                  placeholder="Major"
                  onChange={this.inputHandler}
                  value={this.state.major}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-right">
                <input
                  className="input"
                  name="studied_from"
                  type="date"
                  onChange={this.inputHandler}
                  value={this.state.studied_from}
                />
                <span className="icon is-right">
                  <FontAwesomeIcon icon={faCalendarAlt}/>
                </span>
              </p>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label ">To</label>
              </div>
              <p className="control is-expanded has-icons-right">
                <input
                  className="input"
                  type="date"
                  name="studied_to"
                  onChange={this.inputHandler}
                  value={this.state.studied_to}
                />
                <span className="icon is-right">
                  <FontAwesomeIcon icon={faCalendarAlt}/>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="City, country"
                  name="location"
                  onChange={this.inputHandler}
                  value={this.state.location}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Description</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="details"
                  onChange={this.inputHandler}
                  value={this.state.details}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button
                  className="button is-primary"
                  id={uniqid()}
                  onClick={this.onTrigger}
                >
                  Submit
                </button>
                {this.props.buttonVisible ? (<EduButton onClick={this.props.onClick} visible={this.props.visible}/>) : (<></>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
