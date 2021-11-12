import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Display from "./components/Display";

function App() {
  const [loggedInVal, setLoggedInVal] = useState(false);
  const [needsSignUp, setNeedsSignUp] = useState(false);

  function goToSignUp(bool) {
    setNeedsSignUp(bool);
  }

  function handleLoggedIn(bool) {
    setLoggedInVal(bool);
  }

  return (
    <div className="App">
      <header className="App-header">BookFace</header>
      {loggedInVal ? (
        <Display loggedIn={handleLoggedIn} />
      ) : needsSignUp ? (
        <SignUp toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      ) : (
        <Login toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      )}
    </div>
  );
}

export default App;
