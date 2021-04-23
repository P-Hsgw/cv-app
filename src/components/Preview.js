import React from "react";

class PersonalInfoResume extends React.Component {
  render() {
    const { name, surname, phone, email } = this.props;

    return (
      <div className="columns is-multiline is-centered">
        <div className="column is-narrow">
          <p className="subtitle is-6">Name:</p>
          <p className="title is-6">
            {name} {surname}
          </p>
          <hr />
        </div>

        <div className="column is-narrow">
          <p className="subtitle is-6">Phone:</p>
          <p className="title is-6">{phone}</p>
          <hr />
        </div>
        <div className="column is-narrow">
          <p className="subtitle is-6">Email:</p>
          <p className="title is-6">{email}</p>
          <hr />
        </div>
      </div>
    );
  }
}

class WorkResume extends React.Component {
  render() {
    const {
      company,
      position,
      from,
      to,
      location,
      responsibilities,
    } = this.props;

    return (
      <div className="container">
        <p className="title has-text-primary">Work Experience</p>
        <div className="columns is-centered">
          <div className="column">
            <p className="title is-5">
              Senior Partnerships Specialist, G2A.COM Limited
            </p>
            <p className="subtitle is-6">March 2018 - April 2021</p>
            <div className="container">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="column is-narrow has-text-right">
            <p>Tokyo, Japan</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class EducationResume extends React.Component {
  render() {
    const {
      company,
      position,
      from,
      to,
      location,
      responsibilities,
    } = this.props;

    return (
      <div className="container">
        <p className="title has-text-primary">Education</p>
        <div className="columns is-centered">
          <div className="column">
            <p className="title is-5">
              Political Science, University of Gdańsk
            </p>
            <p className="subtitle is-6">March 2012 - April 2015</p>
            <div className="container">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="column is-narrow has-text-right">
            <p>Gdańsk, Poland</p>
          </div>
        </div>
      </div>
    );
  }
}


export { PersonalInfoResume, WorkResume, EducationResume };
