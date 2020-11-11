import React, { Fragment, Component } from "react";

// Component Imports
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Hero />
        <Login />
        <Signup />
      </Fragment>
    );
  }
}

export default App;
