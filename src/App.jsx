import React from "react";
import ReactDOM from "react-dom";
import Home from "emp_home/Home";

import "./index.css";

const App = () => (
  <div className="container">
    <Home></Home>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
