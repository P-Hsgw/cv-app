import React from "react";

import "./App.sass";

import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Work from "./components/Work";
import Education from "./components/Education";
import { DisplayResume, EditResume } from "./components/ToggleButtons"
import {PersonalInfoResume, WorkResume, EducationResume} from "./components/Preview"

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
              <hr />
              <Work handleData={this.handleWorkData} />
              <hr />
              <Education handleData={this.handleEducationData} />
              <hr />
              {button}
            </>

          ) : (
            <div className="container">
            <p className="title has-text-primary">Resume</p>
            <PersonalInfoResume name={firstName} surname={lastName} phone={phone} email={email} />
            <p className="title has-text-primary mt-5">Work Experience</p>
            <WorkResume />
            <WorkResume />

            <WorkResume />

            <hr />
            <p className="title has-text-primary">Education</p>
            <EducationResume />
            <hr />
            {button}
            </div>

          )}
        </div>
      </div>
    );
  }
}

export default App;
