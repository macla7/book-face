import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Groups(props) {
  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [hosted, setHosted] = useState([]);

  useEffect(() => {
    getGroupsData();
  }, []);

  function getGroupsData() {
    window
      .fetch("/api/groups", {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAllGroups(createList(json));

        return json;
      })
      .catch((error) => console.log(error));

    let user = jwt_decode(Cookies.get("authorization")).sub;

    window
      .fetch(`/api/users/${user}`, {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMyGroups(createList(json.groups));
        setHosted(createList(json.owned_groups));
        return json;
      })
      .catch((error) => console.log(error));
  }

  function createList(arr) {
    return arr.map((group, i) => {
      return (
        <li className="groupLi" key={group.id}>
          {group.name}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Group Feed</h2>
      <h3>Hosted Groups</h3>
      {hosted}
      <h3>Member Of</h3>
      {myGroups}
      <h3>All Groups</h3>
      {allGroups}
    </div>
  );
}

export default Groups;
