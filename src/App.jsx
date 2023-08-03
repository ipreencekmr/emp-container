import React from "react";
import { createRoot } from "react-dom/client";
import Home from "emp_home/Home";

const App = () => (
  <main className="mt-6">
    <hr></hr>
    <Home></Home>
  </main>
);

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;