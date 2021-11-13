import React from "react";
import UsersList from "./UsersList";
import GroupFeed from "./GroupFeed";
import Cookies from "js-cookie";

function Display({ loggedIn, toSignUp, loc }) {
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

  function switcher() {
    switch (loc) {
      case "UsersList":
        return <UsersList />;
      case "GroupFeed":
        return <GroupFeed />;
      default:
        return <UsersList />;
    }
  }

  return (
    <div>
      <h2>Display Area</h2>
      <button onClick={deleteToken}>Logout</button>
      {switcher()}
    </div>
  );
}

export default Display;
