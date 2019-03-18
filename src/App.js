import React, { Component } from "react";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet"
import Form from "./components/Form";
 
class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
 
export default App;