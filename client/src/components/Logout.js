import React from "react";
import Cookies from "js-cookie";

function Logout({ loggedIn, toSignUp, loc }) {
  function deleteToken() {
    window
      .fetch("/api/logout", {
        method: "DELETE",
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .catch((error) => console.log("is this my catch?", error));

    Cookies.remove("authorization");
    loggedIn(false);
    toSignUp(false);
  }

  return <button onClick={deleteToken}>Logout</button>;
}

export default Logout;
