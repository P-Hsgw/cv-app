import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      from: "",
      to: "",
      location: "",
      details: "",
      id: uniqid(),
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onTrigger = (e) => {
    this.props.handleData(
      this.state.company,
      this.state.position,
      this.state.from,
      this.state.to,
      this.state.location,
      this.state.details,
      this.state.id
    );
  };

  render() {
    return (
      <div className="container">
        <p className="title">Work experience</p>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label"></label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  name="company"
                  type="text"
                  placeholder="Company"
                  onChange={this.inputHandler}
                  value={this.state.company}
                />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input"
                  name="position"
                  type="text"
                  placeholder="Position"
                  onChange={this.inputHandler}
                  value={this.state.postion}
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
                  name="from"
                  type="date"
                  onChange={this.inputHandler}
                  value={this.state.from}
                />
                                <span class="icon is-right mt-2">
                  <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
                </span>

              </p>
              
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">To</label>
              </div>
              <p className="control is-expanded has-icons-right">
                <input
                  className="input"
                  type="date"
                  name="to"
                  onChange={this.inputHandler}
                  value={this.state.to}
                />
                                <span class="icon is-right mt-2">
                  <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
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
            <label className="label">Responsibilities</label>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
