import React from "react";
import "./App.css";
import AppBar from "./Components/AppBar";
import Project from "./Components/Project";
import Projects from "./Components/Projects";
import UpdateProject from "./Components/UpdateProjecct";

function App() {
  return (
    <div className="App">
      <AppBar />
      <header className="App-header">
        <Projects />
        <Project />
        {/* <UpdateProject /> */}
      </header>
    </div>
  );
}

export default App;
