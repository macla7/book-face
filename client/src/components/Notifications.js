import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Notifications(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    notifications();
  }, []);

  // later on I want to change this to use active channel(?)
  // so as to get updates if new notifications.
  function notifications() {
    let userId = jwt_decode(Cookies.get("authorization")).sub;
    window
      .fetch(`/api/users/${userId}/notifications`, {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(
          createList(json.notifications, json.userNames, json.groupNames)
        );
        return json;
      })
      .catch((error) => console.log(error));
  }

  function acceptGroupInvite(groupInvite) {
    window
      .fetch(`/api/memberships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          membership: {
            user_id: groupInvite.invitee_id,
            group_id: groupInvite.group_id,
            role: "general",
          },
        }),
      })
      .then((response) => {
        console.log("jsonapi BOI:");
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  function createList(notifs, userNames, groupNames) {
    return notifs.map((notif, i) => {
      switch (notif.type) {
        case "GroupInvite":
          return (
            <li key={i}>
              {getUserName(notif.user_id, userNames)} invited you to join '
              {getGroupName(notif.group_id, groupNames)}'{" "}
              <button>Accept</button>
            </li>
          );
        default:
          return <li key={i}>Nothin</li>;
      }
    });
  }

  function getUserName(userId, userNames) {
    console.log(userNames);
    for (let i = 0; i < userNames.length; i++) {
      if (userNames[i].id === userId) {
        return `${userNames[i].first_name} ${userNames[i].last_name}`;
      }
    }
  }

  function getGroupName(groupId, groupNames) {
    for (let i = 0; i < groupNames.length; i++) {
      if (groupNames[i].id === groupId) {
        return `${groupNames[i].name}`;
      }
    }
  }

  return (
    <div>
      <h2>Notifications</h2>
      {items}
    </div>
  );
}

export default Notifications;
