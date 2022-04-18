import React from "react";
import "./App.css";
import Picture from "./Picture";
const App = (prop) => {
  return (
    <div className="row">
    <div className="col-md-4 col-sm-12 col-lg-3">
      <div className="App bg-dark ">
        <header className="App-header">
          <Picture img={prop.img} />
          <p>
            {prop.name}
            <span className="line">Original Netflix Series</span>
          </p>
          <a
            className="Series-link"
            href={prop.link}
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-dark">Watch Now</button>
          </a>
        </header>
      </div>
    </div>
    </div>
  );
};
export default App;
