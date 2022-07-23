import React from "react";
const styles = {
  imgStyles: {
    height: "60%",
    width: "45%",
    margin: "15px",
    border: "grey solid 2px",
  },
  containerStyles: {
    backgroundColor: "	#416a59",
    color:"white"
  },
};
export default function About() {
  return (
    <div style={styles.containerStyles} class="port">
      <h1 class="p-3">Portfolio</h1>
      <a href="https://peaceful-temple-74699.herokuapp.com/" target="_blank">
        <img
          alt="Scalpel"
          style={styles.imgStyles}
          src={require("../images/scalpel.png")}
        />
      </a>
      <a href="https://kernbryson.github.io/WorthTheWatch/" target="_blank">
        <img
          alt="WorthTheWatch"
          style={styles.imgStyles}
          src={require("../images/worththewatch.png")}
        />
      </a>
      <a target="_blank" href="https://kernbryson.github.io/HW6WeatherDashboard/ ">
        <img
          alt="WeatherDash"
          style={styles.imgStyles}
          src={require("../images/weatherdash.png")}
        />
      </a>
      <a href="https://kernbryson.github.io/HW3RandomPasswordGenerator/">
        <img
          alt="PasswordGen"
          style={styles.imgStyles}
          src={require("../images/passwordgen.png")}
        />
      </a>
      <a href="https://powerful-escarpment-98424.herokuapp.com/">
        <img
          alt="TechBlog"
          style={styles.imgStyles}
          src={require("../images/techblog.png")}
        />
      </a>
      <a href="https://kernbryson.github.io/HW4WebApiCodeQuiz/">
        <img
          alt="CodeQuiz"
          style={styles.imgStyles}
          src={require("../images/codequiz.png")}
        />
      </a>
    </div>
  );
}
