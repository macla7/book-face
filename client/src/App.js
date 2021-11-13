import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Display from "./components/Display";
import Nav from "./components/Nav";

function App() {
  const [loggedInVal, setLoggedInVal] = useState(false);
  const [needsSignUp, setNeedsSignUp] = useState(false);
  const [naved, setNaved] = useState("UsersList");

  function goToSignUp(bool) {
    setNeedsSignUp(bool);
  }

  function handleLoggedIn(bool) {
    setLoggedInVal(bool);
  }

  function handleSetNaved(str) {
    setNaved(str);
  }

  return (
    <div className="App">
      <header className="App-header">BookFace</header>
      <Nav setNav={handleSetNaved} />

      {loggedInVal ? (
        <Display loggedIn={handleLoggedIn} toSignUp={goToSignUp} loc={naved} />
      ) : needsSignUp ? (
        <SignUp toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      ) : (
        <Login toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      )}
    </div>
  );
}

export default App;
