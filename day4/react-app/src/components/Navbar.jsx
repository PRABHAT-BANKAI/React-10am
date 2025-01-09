import React from "react";

const Navbar = ({ color, backgroundColor,count }) => {
  return (
    <>
      <ul
        id=""
        className="card"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          count:{count}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
