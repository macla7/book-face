import React from "react";
import Users from "./Users";
import Cookies from "js-cookie";

function Group(props) {
  let groupId = window.location.pathname[window.location.pathname.length - 1];

  // need to know the group and the users in the group.

  function Invite(invitee) {
    console.log(groupId);
    window
      .fetch(`/api/group_invites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: Cookies.get("authorization"),
        },
        body: JSON.stringify({
          group_invite: {
            invitee_id: invitee.id,
            group_id: groupId,
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

  function getMembers() {
    return window
      .fetch(`/api/group/${groupId}/members`, {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log("members for group are", json);
        return json;
      })
      .catch((error) => console.log(error));
  }

  function getAllUsers() {
    return window
      .fetch("/api/users", {
        headers: {
          Authorization: Cookies.get("authorization"),
        },
      })
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>Group</h2>
      <h3>Members</h3>
      <Users actionOnUser={() => null} filterSelf getUsers={getMembers} />
      <h3>Invite</h3>
      <Users actionOnUser={Invite} filterSelf getUsers={getAllUsers} />
    </div>
  );
}

export default Group;
