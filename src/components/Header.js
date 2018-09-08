import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <header
    style={{
      margin: "9rem 0",
      textAlign: "center"
    }}
  >
    <Link to="/">
      <h1>We Took A Trip...</h1>
    </Link>
  </header>
);

export default Header;
