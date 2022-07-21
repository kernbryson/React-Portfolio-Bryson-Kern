import React from "react";
const styles = {
  textStyles: {
    fontSize: "25px",
    margin: "15px",
  },
};
export default function Blog() {
  return (
    <div>
      <h1>Resume</h1>
      <p style={styles.textStyles}>
        Hardworking and dedicated student at Georgia Tech. A critical thinker
        that goes above and beyond to create a better working environment.
        Passionate about my learning and strive to create greatness in my school
        and personal life. Proficient in computer hardware and software.
        Motivated and always willing to learn more.
        <br />
        <br />
        <h4>
          EXPERIENCE
          <br />
          <br />
          07/2019 - 02/2022 SALES ASSOCIATE, SHERWIN WILLIAMS COMMERCIAL
        </h4>
        <ul>
          <li>
            {" "}
            Provided customers information and recommendations on what paint
            products to use
          </li>
          <li>
            Maintained and created new customer relationships to help them
            succeed in their business
          </li>
          <li>
            Coordinated delivery orders by making orders and directing the
            drivers where to go and who to contact when they arrive.
          </li>
          <li>
            Created relationships beyond my store with other managers and sales
            representatives.
          </li>
          <li>
            Took on leadership roles by guiding my team at work and directing
            team outings
          </li>
          <li>
            Responsible for quoting customers for hard equipment such as paint
            sprayers and pressure washers
          </li>
          <li>
            In charge of calling key customers every week to see how my company
            could help
          </li>
        </ul>
        <h4>EDUCATION</h4>
        <br />
        <ul>
          <li>
            08/2018 PHSYCHOLOGY, KENNESAW STATE UNIVERSITY 3.8 GPA 08/2019
          </li>
          <li>
            NETWORK ADMINISTRATION, GWINNETT TECHNICAL COLLEGE 4.0 GPA 02/2022
          </li>
          <li>FULL STACK CODING BOOTCAMP, GEORGIA TECH</li>
        </ul>
        <h4>SKILLS</h4>
        <ul>
          <li>Reliable</li>
          <li>Tech-Savvy</li>
          <li>Personable</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>MYSQL</li>
          <li>Handlebars.JS • Hardworking</li>
          <li>Customer Relations</li>
          <li>Creative</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>NODE</li>
          <li>Express</li>
        </ul>
        <h4>ACTIVITIES</h4>I am an outdoorsman at heart. I enjoy backpacking and
        camping as well as riding motorcycles. I am with a Men’s organization
        called MDI which has allowed me to help other men with problems they
        face which in turn allows me to learn from them. Additionally, MDI has
        granted me leadership opportunities.
      </p>
    </div>
  );
}
