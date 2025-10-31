import React from "react";
import arrow_icon from "./assets/arrow_icon.svg";

const App = () => {
  return (
    <div className="">
      <div className="container">
        <a href="" className="btn btn-primary btn-icon">
          Connect
          <span>
            <img
              src={arrow_icon}
              alt="arrow-icon"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;
