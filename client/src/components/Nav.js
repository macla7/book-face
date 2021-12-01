import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/users">Users</Link>
        </li> */}
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
