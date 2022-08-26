import React from "react";
import pdf from "../images/Bryson Kern Resume Dev.pdf"
const styles = {
  textStyles: {
    fontSize: "25px",
    margin: "15px",
  },
  containerStyles: {
    backgroundColor: "	#416a59",
    color: "white",
    height:"180vh"
  },
  pdfStyles:{
    width:"100vw",
    height:"100vh"
  }
};
export default function Blog() {
  return (
 <div>
  <iframe style={styles.pdfStyles} src={pdf} frameBorder="0"></iframe>
 </div>
  );
}
