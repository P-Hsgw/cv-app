import React from "react";
import "./App.sass";
import Header from "./components/Header"
import PersonalInformations from "./components/PersonalInformations"

class App extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return(

        <div className="App">
          <Header />
          <PersonalInformations />
        </div>

    )
  }
}



export default App;
