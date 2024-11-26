import { useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <div>
        <h1>User Component</h1>
        <User data={{ name: "Aman Kumar", age: 27 }} />
      </div>
    </>
  );
}

export default App;
