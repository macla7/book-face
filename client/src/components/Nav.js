import React from "react";

function Nav({ setNav }) {
  function handleNavClick(e) {
    setNav(e.target.value);
  }

  return (
    <nav>
      <h2>Nav</h2>
      <button onClick={handleNavClick} value="UsersList">
        Users
      </button>
      <button onClick={handleNavClick} value="GroupFeed">
        Groups
      </button>
    </nav>
  );
}

export default Nav;
