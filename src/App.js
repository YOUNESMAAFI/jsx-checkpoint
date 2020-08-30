import React from "react";
import logo from "./person.svg";
import "./App.css";

import hacker from "./hacker.svg";
// import web from "/code.svg";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Younes Maafi</h1>
          <br />
          <img src={hacker} /> <br></br>
          <img src="/code.svg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      ;
    </div>
  );
}

export default App;
