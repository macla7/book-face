import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function UsersList(props) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

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

  return (
    <div className="usersList">
      <h2>Users</h2>
      <ul>{usersList}</ul>
    </div>
  );
}

export default UsersList;
