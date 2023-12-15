import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks] = useState([
    { name: "Login", path: "/login" },
    { name: "Orders", path: "/myorders" },
    { name: "Logout", path: "/login" },
  ]);

  return (
    <div>
      <IoMenu
        className="dropdown dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul class="dropdown-menu">
        {navLinks.map((d, i) => (
          <li key={i}>
            <Link to={d.path}>
              <button class="dropdown-item" type="button">
                {d.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
