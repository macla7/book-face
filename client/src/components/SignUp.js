import React from "react";
import Cookies from "js-cookie";

function SignUp({ loggedIn, toSignUp }) {
  function signUp(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log(firstName, lastName, email, password);

    window
      .fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            first_name: firstName,
            last_name: lastName,
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

  function goToLogin() {
    toSignUp(false);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <label>
          First Name:
          <input type="text" id="firstName" name="firstName" />
        </label>
        <label>
          Last Name:
          <input tpye="text" id="lastName" name="lastName" />
        </label>
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
      <button onClick={goToLogin}>Login</button>
    </div>
  );
}

export default SignUp;
