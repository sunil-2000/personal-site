import { Component } from "react";
import About from "./components/about";
import Background from "./components/art/background";
import Skills from "./components/skills";
class App extends Component {
  render() {
    return (
      <>
        <Background> </Background>
        <About></About>
        <Skills></Skills>
        <section>
          <div>Hello World</div>
        </section>
      </>
    );
  }
}

export default App;
