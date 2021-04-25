import React from "react";

import "./App.sass";

import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Work from "./components/Work";
import Education from "./components/Education";
import { DisplayResume, EditResume } from "./components/ToggleButtons";
import {
  PersonalInfoResume,
  WorkResume,
  EducationResume,
} from "./components/Preview";

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
      work_1: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
        description: "",
      },
      work_2: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
        description: "",
      },
      work_3: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
        description: "",
      },
      edu_1: {
        university: "",
        major: "",
        studied_from: "",
        studied_to: "",
        location: "",
        details: "",
      },
      edu_2: {
        university: "",
        major: "",
        studied_from: "",
        studied_to: "",
        location: "",
        details: "",
      },
      edu_3: {
        university: "",
        major: "",
        studied_from: "",
        studied_to: "",
        location: "",
        details: "",
      },
      resumeIsVisible: false,
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
    studied_from,
    studied_to,
    location,
    details,
    id
  ) => {
    this.setState((prevState) => ({
      [id]: {
        university: university,
        major: major,
        studied_from: studied_from,
        studied_to: studied_to,
        location: location,
        details: details,
      },
    }));
  };

  handleResumeVisible = () => {
    this.setState({ resumeIsVisible: true });
  };

  handleResumeNotVisible = () => {
    this.setState({ resumeIsVisible: false });
  };

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
    } = this.state.personalInformations;

    let button;

    if (this.state.resumeIsVisible) {
      button = <EditResume onClick={this.handleResumeNotVisible} />;
    } else {
      button = <DisplayResume onClick={this.handleResumeVisible} />;
    }

    return (
      <div className="App">
        <Header />
        <div className="section">
          {!this.state.resumeIsVisible ? (
            <>
              <PersonalInformation
                handleData={this.handlePersonalData}
                name={firstName}
                surname={lastName}
                phone={phone}
                email={email}
              />
              <hr />
              <Work
                id="work_1"
                handleData={this.handleWorkData}
                company={this.state.work_1.company}
                position={this.state.work_1.position}
                from={this.state.work_1.from}
                to={this.state.work_1.to}
                location={this.state.work_1.city}
                details={this.state.work_1.description}
              />
              <hr />
              <Education
                id="edu_1"
                handleData={this.handleEducationData}
                university={this.state.edu_1.university}
                major={this.state.edu_1.major}
                studied_from={this.state.edu_1.studied_from}
                studied_to={this.state.edu_1.studied_to}
                details={this.state.edu_1.details}
                location={this.state.edu_1.location}
              />
              <hr />
              {button}
            </>
          ) : (
            <div className="container">
              <p className="title has-text-primary">Resume</p>
              <PersonalInfoResume
                name={firstName}
                surname={lastName}
                phone={phone}
                email={email}
              />
              <p className="title has-text-primary mt-5">Work Experience</p>
              <WorkResume
                company={this.state.work_1.company}
                position={this.state.work_1.position}
                from={this.state.work_1.from}
                to={this.state.work_1.to}
                location={this.state.work_1.city}
                details={this.state.work_1.description}
              />

              {/* <WorkResume id="work_2" company={this.state.work_2.company}/>
            <WorkResume id="work_3" company={this.state.work_3.company}/> */}

              <hr />
              <p className="title has-text-primary">Education</p>
              <EducationResume                 university={this.state.edu_1.university}
                major={this.state.edu_1.major}
                studied_from={this.state.edu_1.studied_from}
                studied_to={this.state.edu_1.studied_to}
                description={this.state.edu_1.details}
                city={this.state.edu_1.location}/>
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
