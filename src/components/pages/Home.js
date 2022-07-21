import React from 'react';
const styles = {
  textStyles: {
    fontSize: "25px",
    margin: "15px",
  },
};
export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <p style={styles.textStyles}>
      I am currently a full time student at Georgia Tech who is proficient in HTML, CSS, javascript, SQL, node, JQuery and bootstrap. My
      hobbies include, backpacking, camping, and gaming. I currently live in
      Loganville Georgia. After completing my bootcamp I wish to become a
      web developer.
      </p>
    </div>
  );
}
