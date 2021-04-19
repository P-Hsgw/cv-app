import React from "react";
import "./App.sass";
import Header from "./components/Header";
import PersonalInformations from "./components/PersonalInformations";

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

  handleData = (name, surname, phone, email) => {
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

  render() {
    return (
      <div className="App">
        <Header />
        <PersonalInformations handleData={this.handleData} />
      </div>
    );
  }
}

export default App;
