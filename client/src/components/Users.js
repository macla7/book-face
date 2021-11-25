import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function UsersList(props) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  function sortLis() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputUser");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
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
      let userId = jwt_decode(Cookies.get("authorization")).sub;
      if (user.id !== parseInt(userId)) {
        return (
          <li
            className="userLi"
            key={user.id}
            onClick={() => handleClick(user)}
          >
            {user.first_name} {user.last_name} {user.id}
          </li>
        );
      } else {
        return null;
      }
    });
  }

  function handleClick(user) {
    props.actionOnUser(user);
  }

  return (
    <div>
      <h2>Group</h2>
      <input
        type="text"
        id="inputUser"
        onKeyUp={sortLis}
        placeholder="Search for names.."
      />

      <ul id="myUL">{usersList}</ul>
    </div>
  );
}

export default UsersList;
