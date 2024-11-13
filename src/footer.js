import React from "react";
import facebookIcon from "./assets/logo-facebook.svg"; // Adjust the path as needed
import instagramIcon from "./assets/logo-instagram.svg"; // Adjust the path as needed
import linkedinIcon from "./assets/logo-linkedin.svg"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center",
          gap: "10px", // Add spacing between text and icons
        }}
      >
        <p style={{ margin: 0 }}>© 2024 Globebug. All Rights Reserved.</p>

        {/* Social Media Icons */}
        <a
          href="https://www.facebook.com/profile.php?id=61557516698308"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            style={{ width: "24px", height: "24px" }}
          />
        </a>

        <a
          href="https://www.instagram.com/globebugtravel/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            style={{ width: "24px", height: "24px" }}
          />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
