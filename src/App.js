import Header from "./Header";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import FirstContent from "./FirstContent";
import Divider from "./Divider.js";
import ProjectSection from "./ProjectSection";
import "./App.css";

import "./fonts/Bogart-Alt-Medium.ttf";
import "./fonts/Biotif-Regular.ttf";
import "./fonts/Biotif-Bold.ttf";
import "./fonts/Helvetica Neue Medium Extended.ttf";
import "./fonts/Helvetica Neue UltraLight.ttf";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <FirstContent />
      <Divider />
      <ProjectSection />
    </div>
  );
}

export default App;
