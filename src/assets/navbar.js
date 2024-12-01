import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="bg-gray-50 shadow-lg py-2"
      style={{
        display: "flex",
        justifyContent: "flex-start", // Align to the left
        alignItems: "center",
        paddingLeft: "50px", // Add some padding from the left edge
      }}
    >
      <Link to="/" className="no-underline">
        <img
          src="/whitelogo.PNG" // Ensure this path matches your file structure
          alt="Globebug Logo"
          style={{
            width: "50px", // Adjust width for the desired size
            height: "50px", // Adjust height for the desired size
          }}
        />
      </Link>
    </nav>
  );
}

export default Navbar;
