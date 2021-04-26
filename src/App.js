import React from "react";

import "./App.sass";

import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Work from "./components/Work";
import Education from "./components/Education";
import {
  DisplayResume,
  EditResume,
  DisplayDemo,
} from "./components/ToggleButtons";
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

      work2Visible: false,
      work3Visible: false,
      edu2Visible: false,
      edu3Visible: false,
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

  toggleWork2 = () => {
    this.setState((prevState) => ({
      work2Visible: !prevState.work2Visible,
    }));
  };

  toggleWork3 = () => {
    this.setState((prevState) => ({
      work3Visible: !prevState.work3Visible,
    }));
  };

  toggleEdu2 = () => {
    this.setState((prevState) => ({
      edu2Visible: !prevState.edu2Visible,
    }));
  };

  toggleEdu3 = () => {
    this.setState((prevState) => ({
      edu3Visible: !prevState.edu3Visible,
    }));
  };

  handleDemo = () => {
    this.setState({
      work2Visible: true,
      work3Visible: true,
      personalInformations: {
        firstName: "John",
        lastName: "Doe",
        phone: "+91 9999 1234",
        email: "john.doe@gmail.com",
      },
      work_1: {
        company: "Google",
        position: "Senior Software Engineer",
        from: "2020-01-01",
        to: "2021-02-01",
        city: "San Francisco, California",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at fermentum velit, ac bibendum diam. Pellentesque quis convallis sem. Aliquam erat volutpat. Curabitur congue eleifend eleifend. Pellentesque rutrum felis nec nisi egestas, sit amet blandit justo auctor. Donec id diam non nulla semper ultrices. Proin finibus varius odio in finibus.",
      },
      work_2: {
        company: "Amazon.com",
        position: "Software Engineer",
        from: "2019-01-01",
        to: "2019-12-30",
        city: "Seattle, Washington",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dolor justo, sit amet aliquet dolor iaculis sit amet. Sed venenatis neque arcu, eu ornare velit fringilla et. Nunc mi nisl, dapibus in magna pulvinar, semper malesuada tortor. Curabitur ac efficitur arcu. Vestibulum ante ipsum primis in faucibus orci luctus.",
      },
      work_3: {
        company: "Netflix",
        position: "Junior Software Engineer",
        from: "2018-01-01",
        to: "2018-06-15",
        city: "Portland, Oregon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dolor justo, sit amet aliquet dolor iaculis sit amet. Sed venenatis neque arcu, eu ornare velit fringilla et. Nunc mi nisl, dapibus in magna pulvinar, semper malesuada tortor. Curabitur ac efficitur arcu. Vestibulum ante ipsum primis in faucibus orci luctus. ",
      },
      edu_1: {
        university: "University of California",
        major: "Computer Science",
        studied_from: "2013-01-01",
        studied_to: "2016-09-30",
        location: "Oakland, California",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum viverra tempor. Ut tristique dolor ac commodo laoreet. Proin porta hendrerit ex, non elementum ante consectetur rutrum. In a volutpat sapien, tincidunt porttitor elit. In hac habitasse platea dictumst. Mauris malesuada imperdiet libero id vehicula. Aliquam neque tellus, consectetur elementum. ",
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
    });
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
                onClick={this.toggleWork2}
                visible={this.state.work2Visible}
                buttonVisible={true}
              />

              {this.state.work2Visible && (
                <Work
                  id="work_2"
                  handleData={this.handleWorkData}
                  company={this.state.work_2.company}
                  position={this.state.work_2.position}
                  from={this.state.work_2.from}
                  to={this.state.work_2.to}
                  location={this.state.work_2.city}
                  details={this.state.work_2.description}
                  onClick={this.toggleWork3}
                  visible={this.state.work3Visible}
                  buttonVisible={true}
                />
              )}

              {this.state.work3Visible && (
                <Work
                  id="work_3"
                  handleData={this.handleWorkData}
                  company={this.state.work_3.company}
                  position={this.state.work_3.position}
                  from={this.state.work_3.from}
                  to={this.state.work_3.to}
                  location={this.state.work_3.city}
                  details={this.state.work_3.description}
                  onClick={this.toggleWork3}
                  visible={this.state.work3Visible}
                  buttonVisible={false}
                />
              )}

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
                onClick={this.toggleEdu2}
                visible={this.state.edu2Visible}
                buttonVisible={true}
              />
              {this.state.edu2Visible && (
                <Education
                  id="edu_2"
                  handleData={this.handleEducationData}
                  university={this.state.edu_2.university}
                  major={this.state.edu_2.major}
                  studied_from={this.state.edu_2.studied_from}
                  studied_to={this.state.edu_2.studied_to}
                  details={this.state.edu_2.details}
                  location={this.state.edu_2.location}
                  onClick={this.toggleEdu3}
                  visible={this.state.edu3Visible}
                  buttonVisible={true}
                />
              )}

              {this.state.edu3Visible && (
                <Education
                  id="edu_3"
                  handleData={this.handleEducationData}
                  university={this.state.edu_3.university}
                  major={this.state.edu_3.major}
                  studied_from={this.state.edu_3.studied_from}
                  studied_to={this.state.edu_3.studied_to}
                  details={this.state.edu_3.details}
                  location={this.state.edu_3.location}
                  onClick={this.toggleEdu3}
                  visible={this.state.edu3Visible}
                  buttonVisible={false}
                />
              )}
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

              {this.state.work_2.company !== "" ? (
                <WorkResume
                  company={this.state.work_2.company}
                  position={this.state.work_2.position}
                  from={this.state.work_2.from}
                  to={this.state.work_2.to}
                  location={this.state.work_2.city}
                  details={this.state.work_2.description}
                />
              ) : (
                <></>
              )}

              {this.state.work_3.company !== "" ? (
                <WorkResume
                  company={this.state.work_3.company}
                  position={this.state.work_3.position}
                  from={this.state.work_3.from}
                  to={this.state.work_3.to}
                  location={this.state.work_3.city}
                  details={this.state.work_3.description}
                />
              ) : (
                <></>
              )}

              <hr />
              <p className="title has-text-primary">Education</p>
              <EducationResume
                university={this.state.edu_1.university}
                major={this.state.edu_1.major}
                studied_from={this.state.edu_1.studied_from}
                studied_to={this.state.edu_1.studied_to}
                description={this.state.edu_1.details}
                city={this.state.edu_1.location}
              />
              {this.state.edu_2.university!== "" ? (              
              <EducationResume
                university={this.state.edu_2.university}
                major={this.state.edu_2.major}
                studied_from={this.state.edu_2.studied_from}
                studied_to={this.state.edu_2.studied_to}
                description={this.state.edu_2.details}
                city={this.state.edu_2.location}
              />) : (<></>)}
                            {this.state.edu_3.university!== "" ? (              
              <EducationResume
                university={this.state.edu_3.university}
                major={this.state.edu_3.major}
                studied_from={this.state.edu_3.studied_from}
                studied_to={this.state.edu_3.studied_to}
                description={this.state.edu_3.details}
                city={this.state.edu_3.location}
              />) : (<></>)}
              <hr />
              {button}
              <DisplayDemo onClick={this.handleDemo} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
