import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
