import React from "react";

const styles = {
  sectionStyles: {
    height: "30vh",
    fontSize: "120px",
    border: "solid grey 1px",
  },

  pictureStyles: {
    float: "left",
    borderRadius: "50%",
    margin: "20px",
  },
  spanStyles: {
    fontSize: "30px",
    display: "block",
    marginLeft: "500px",
  },
  navStyles: {
    fontSize: "40px",
    textDecoration: "none",
    color: "inherit",
  },
  linkStyles: {
    textDecoration: "none",
    color: "#575757",
    width:"10vw"
  },
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav style={styles.sectionStyles}>
        Bryson Kern
        <img
          alt="timer"
          style={styles.pictureStyles}
          src={require("./images/bryson headshot.jpg")}
        />
        <span style={styles.spanStyles}>Full Stack Web Developer </span>
      </nav>

      <ul className="nav nav-tabs" style={styles.navStyles}>
        <li className="nav-item">
          <a
            style={styles.linkStyles}
            href="#home"
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.linkStyles}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.linkStyles}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            style={styles.linkStyles}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
