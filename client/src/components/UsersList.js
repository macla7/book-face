import React, { useState } from "react";
import Cookies from "js-cookie";

function UsersList(props) {
  const [usersList, setUsersList] = useState([]);
  const [cookie, setCookie] = useState("");

  function createSpongebob() {
    window
      .fetch("/api/signup", {
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
          }
        }
        return response.json();
      })
      .catch((error) => console.log(error));
  }

  function getUsersData() {
    window
      .fetch("/api/users", {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsersList(createList(json));
        return json;
      })
      .catch((error) => console.log(error));
  }

  function createList(arr) {
    return arr.map((user, i) => {
      return (
        <li className="userLi" key={user.id}>
          <p>
            {user.first_name} {user.last_name} {user.id}
          </p>
        </li>
      );
    });
  }

  function getSpecificUser() {
    window
      .fetch("/api/users/1", {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(document.cookie);
        console.log(json);
        return json;
      })
      .catch((error) => console.log(error));
  }

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
  }

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
    <div className="usersList">
      <button onClick={createSpongebob}>Create Spongebob</button>
      <button onClick={getUsersData}>Get Data</button>
      <button onClick={getSpecificUser}>Get Specific User</button>
      <button onClick={deleteToken}>Logout</button>
      <button onClick={login}>Login</button>
      <p>{cookie}</p>
      <ul>{usersList}</ul>
    </div>
  );
}

export default UsersList;
