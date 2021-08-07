import { Component } from "react";
import About from "./components/about";
import Background from "./components/art/background";
import Skills from "./components/skills";
import Experience from "./components/experience";
class App extends Component {
  render() {
    return (
      <>
        <Background> </Background>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <section>
          <div>Hello World</div>
        </section>
      </>
    );
  }
}

export default App;
