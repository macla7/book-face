import React from "react";
import UsersList from "./UsersList";
import Cookies from "js-cookie";

function Display({ loggedIn }) {
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
  }

  return (
    <div>
      <h2>Display Area</h2>
      <button onClick={deleteToken}>Logout</button>
      <UsersList />
    </div>
  );
}

export default Display;
