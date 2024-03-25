import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./Input";
import List from "./List";

function App() {
  return (
    <div>
      <h1>To Do List</h1>

      <Input />

      <List />
    </div>
  );
}

export default App;
