import React from "react";
import "./App.css";
import Data from "./Data";
import App from "./App";
function Main() {
  return (
    <>
    <div className="container">
      <h1>Top 5 Netflix Series</h1>
      {Data.map((data) => {
        return (
          <App
            key={data.key}
            img={data.img}
            name={data.name}
            link={data.link}
          />
          
        );
      })}
      </div>
    </>
  );
}
export default Main;
