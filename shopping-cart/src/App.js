import React from "react";
import "./App.css";
import Item from "./components/Items";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="card cart">
      <Logo />
      <header>
        <h5>Your Order from</h5>
        <h3>Pizza Hut</h3>
      </header>
      <Item />
    </div>
  );
}

export default App;
