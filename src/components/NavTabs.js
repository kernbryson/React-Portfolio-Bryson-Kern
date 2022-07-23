import React from "react";

const styles = {
  sectionStyles: {
    height: "30vh",
    fontSize: "120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "solid grey 1px",
    imageRendering: "-webkit-optimize-contrast",
    backgroundImage:
      "url(data:image/jpeg;base64,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)",
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
    backgroundColor: "	#DCDCDC",
  },
  linkStyles: {
    textDecoration: "none",
    color: "#575757",
    width: "10vw",
  },
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div class="dropdown drop">
        <button
          class="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars"> </i>
        </button>

        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <nav style={styles.sectionStyles}>
        Bryson Kern
        <img
          alt="timer"
          style={styles.pictureStyles}
          src={require("./images/bryson headshot.jpg")}
        />
        <span style={styles.spanStyles}>Full Stack Web Developer </span>
      </nav>

      <ul className="nav nav-tabs " style={styles.navStyles} >
        <li className="nav-item media">
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
        <li className="nav-item media">
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
        <li className="nav-item media">
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
        <li className="nav-item media">
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
