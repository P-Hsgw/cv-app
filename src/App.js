import React from "react";

import "./App.sass";

import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Work from "./components/Work";
import Education from "./components/Education";
import { DisplayResume, EditResume } from "./components/ToggleButtons"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInformations: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      resumeVisible: false,
    };
  }

  handlePersonalData = (name, surname, phone, email) => {
    this.setState((prevState) => ({
      personalInformations: {
        firstName: name,
        lastName: surname,
        phone: phone,
        email: email,
      },
    }));
  };

  handleWorkData = (company, position, from, to, city, description, id) => {
    this.setState((prevState) => ({
      [id]: {
        company: company,
        position: position,
        from: from,
        to: to,
        city: city,
        description: description,
      },
    }));
  };

  handleEducationData = (
    university,
    major,
    from,
    to,
    city,
    description,
    id
  ) => {
    this.setState((prevState) => ({
      [id]: {
        university: university,
        major: major,
        from: from,
        to: to,
        city: city,
        description: description,
      },
    }));
  };

  handleResumeVisible = () => {
    this.setState({resumeVisible: true})
  }

  handleResumeNotVisible = () => {
    this.setState({resumeVisible: false})
  }

  render() {
    const { firstName, lastName, phone, email } = this.state.personalInformations

    let button;

    if (this.state.resumeVisible) {
      button = <EditResume onClick={this.handleResumeNotVisible} />
    } else {
      button = <DisplayResume onClick={this.handleResumeVisible} />
    }

    return (
      <div className="App">
        <Header />
        <div className="section">
          {!this.state.resumeVisible ? (
            <>
              <PersonalInformation handleData={this.handlePersonalData} name={firstName} surname={lastName} phone={phone} email={email} />
              <Work handleData={this.handleWorkData} />
              <Education handleData={this.handleEducationData} />
              {button}
            </>
          ) : (
            <>{button}</>
          )}
        </div>

      </div>
    );
  }
}

export default App;
