import React, { useState } from "react";
import Cookies from "js-cookie";

function UsersList(props) {
  const [usersList, setUsersList] = useState([]);
  const [cookie, setCookie] = useState("");

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

  return (
    <div className="usersList">
      <button onClick={getUsersData}>Get Data</button>
      <button onClick={getSpecificUser}>Get Specific User</button>
      <p>{cookie}</p>
      <ul>{usersList}</ul>
    </div>
  );
}

export default UsersList;
