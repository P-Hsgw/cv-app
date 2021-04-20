import React from "react";

import "./App.sass";
import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Work from "./components/Work"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInformations: {
        firstName: "",
        lastName: "",
        phone: 0,
        email: "",
      },
    };
  }

  handlePersonalData = (name, surname, phone, email) => {
    this.setState((prevState) => ({
      personalInformations: {
        ...prevState.personalInformations,
        firstName: name,
        lastName: surname,
        phone: phone,
        email: email,
      },
    })
    );
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
    })
    );

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="section is-medium">
        <PersonalInformation handleData={this.handlePersonalData} />
        <hr />
        <Work handleData={this.handleWorkData}/>

        </div>
      </div>
    );
  }
}

export default App;
