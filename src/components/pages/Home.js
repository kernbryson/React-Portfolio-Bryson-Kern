import React from "react";
const styles = {
  textStyles: {
    fontSize: "25px",
    margin: "15px",
  },
  containerStyles: {
    backgroundColor: "	#416a59",
    color: "white",
    height:"70vh"
  },
};
export default function Home() {
  return (
    <div style={styles.containerStyles}>
      <h1 class="p-3">About Me</h1>
      <p style={styles.textStyles}>
        I am currently a full time student at Georgia Tech who is proficient in
        HTML, CSS, javascript, SQL, node, JQuery and bootstrap. My hobbies
        include, backpacking, camping, and gaming. I currently live in
        Loganville Georgia. After completing my bootcamp I wish to become a web
        developer.
      </p>
    </div>
  );
}
