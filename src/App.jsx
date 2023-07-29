import React from "react";
import ReactDOM from "react-dom";
import Home from "emp_home/Home";

import "./index.css";

const App = () => (
  <main className="mt-6">
    <hr></hr>
    <Home></Home>
  </main>
);

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
