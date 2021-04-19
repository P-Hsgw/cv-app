import React from "react";

class PersonalInformations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onTrigger = () => {
    this.props.handleData(this.state.firstName, this.state.lastName, this.state.phone, this.state.email) 
  }

  render() {
    return (
      <div className="section is-medium">
        <div className="container">
          <p className="title">Personal informations</p>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Form</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    onChange={this.inputHandler}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    name="lastName"
                    type="text"
                    placeholder="Surname"
                    onChange={this.inputHandler}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal"></div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    name="phone"
                    type="number"
                    placeholder="Phone number"
                    onChange={this.inputHandler}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.inputHandler}
                  />
                </p>
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
                    onClick={this.onTrigger}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInformations;
