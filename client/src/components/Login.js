import React, { useEffect } from "react";
import Cookies from "js-cookie";

function Login({ toSignUp, loggedIn }) {
  function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log(firstName, lastName, email, password);

    window
      .fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      })
      .then((response) => {
        console.log("jsonapi BOI:");
        for (var pair of response.headers.entries()) {
          console.log(pair[0] + ": " + pair[1]);
          if (pair[0] === "authorization") {
            Cookies.set("authorization", pair[1]);
            loggedIn(true);
          }
        }
        return response.json();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (Cookies.get("authorization")) {
      loggedIn(true);
    }
  }, []);

  function goToSignUp() {
    toSignUp(true);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={login}>
        <label>
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
      <button onClick={goToSignUp}>Sign Up</button>
    </div>
  );
}

export default Login;
