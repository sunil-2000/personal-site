import { Component } from "react";
import About from "./components/about";
import Background from "./components/art/background";
class App extends Component {
  render() {
    return (
      <>
        <Background></Background>
        <About></About>
      </>
    );
  }
}

export default App;
