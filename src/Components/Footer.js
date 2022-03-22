import { Fragment } from "react";
import React from "react";
import "../componentStyle/foot.css"
const ages = [25, 3, 55, 64, 77, 88, 51];
function Footer() {
  return (
    <Fragment>
      <h2 style={{ color: "green", marginTop: "100px" }} className="foot">
        {ages.map((el,ind) => (
          <p key={ind}>{el}</p>
        ))}
      </h2>
    </Fragment>
  );
}

export default Footer;
