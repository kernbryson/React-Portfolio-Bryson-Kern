import React from "react";

const styles = {
  iconStyle: {
    margin: "10px",
  },
  linkStyles: {
    textDecoration: "none",
    color: " #171515",
  },
  footerStyle:{
    backgroundColor: "#DCDCDC",
    bottom:"0px"
  }
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const Footer = () => {
  return (
    <div style={styles.footerStyle} class=" d-flex justify-content-center">
      <a style={styles.linkStyles} href="https://github.com/kernbryson">
        <i style={styles.iconStyle} class="fa-brands fa-github fa-3x "></i>
      </a>
      <a
        style={styles.linkStyles}
        href="https://www.linkedin.com/in/bryson-kern-96923322b/"
      >
        <i style={styles.iconStyle} class="fa-brands fa-linkedin fa-3x "></i>
      </a>
    </div>
  );
};
export default Footer;
