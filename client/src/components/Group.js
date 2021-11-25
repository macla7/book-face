import React from "react";
import Users from "./Users";

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

  return (
    <div>
      <h2>Group</h2>
      <Users actionOnUser={Invite} filterSelf />
    </div>
  );
}

export default Group;
