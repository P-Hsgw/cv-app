import React from "react";

class Work extends React.Component {
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
                    value = {this.state.firstName}
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
                    value = {this.state.lastName}
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
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    name="from"
                    type="date"
                    onChange={this.inputHandler}
                    value = {this.state.phone}
                  />
                </p>
              </div>
              <div className="field is-horizontal">
              <div className="field-label is-normal">
            <label className="label">To</label>
            </div>
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="date"
                    name="to"
                    onChange={this.inputHandler}
                    value = {this.state.email}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="City, country"
                    name="location"
                    onChange={this.inputHandler}
                    value = {this.state.email}
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Responsibilities</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea"></textarea>
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
