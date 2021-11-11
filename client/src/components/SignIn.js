import React from "react";

function SignIn(props) {
  function login() {
    window
      .fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            email: "Spongebob@email",
            password: "Bing123!",
          },
        }),
      })
      .then((response) => {
        console.log("jsonapi BOI:");
        for (var pair of response.headers.entries()) {
          console.log(pair[0] + ": " + pair[1]);
          if (pair[0] === "authorization") {
            setCookie(pair[1]);
            Cookies.set("authorization", pair[1]);
          }
        }
        return response.json();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label for="firstNname">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
        <label for="lastName">Last Name:</label>
        <input tpye="text" id="lastName" name="lastName" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </div>
  );
}

export default SignIn;
