import "./App.css";
import React, { useEffect } from "react";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <header className="App-header">BookFace</header>
      <UsersList />
    </div>
  );
}

export default App;
