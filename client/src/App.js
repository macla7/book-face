import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Groups from "./components/Groups";

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
      <Logout loggedIn={handleLoggedIn} toSignUp={goToSignUp} />

      {loggedInVal ? (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </Router>
      ) : needsSignUp ? (
        <SignUp toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      ) : (
        <Login toSignUp={goToSignUp} loggedIn={handleLoggedIn} />
      )}
    </div>
  );
}

export default App;
