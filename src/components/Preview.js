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
      details,
    } = this.props;

    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <p className="title is-5 mt-3">
              {position}, {company}
            </p>
            <p className="subtitle is-6">{from} - {to}</p>
            <div className="container">
              {details}
            </div>
          </div>
          <div className="column is-narrow has-text-right">
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}

class EducationResume extends React.Component {
  render() {
    const {
      university, major, studied_from, studied_to, description, city
    } = this.props;

    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <p className="title is-5">
              {major}, {university}
            </p>
            <p className="subtitle is-6">{studied_from} - {studied_to}</p>
            <div className="container">
              {description}
            </div>
          </div>
          <div className="column is-narrow has-text-right">
            <p>{city}</p>
          </div>
        </div>
      </div>
    );
  }
}


export { PersonalInfoResume, WorkResume, EducationResume };
