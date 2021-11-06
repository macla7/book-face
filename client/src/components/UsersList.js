import React, { useEffect, useState } from "react";

function UsersList(props) {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    window
      .fetch("/api/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsersList(createList(json));
        return json;
      })
      .catch((error) => console.log(error));
  }, []);

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
      <ul>{usersList}</ul>
    </div>
  );
}

export default UsersList;
