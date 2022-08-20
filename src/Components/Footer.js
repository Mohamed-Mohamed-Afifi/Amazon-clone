import { Fragment, useState } from "react";
import React from "react";
import "../componentStyle/foot.css";

function Footer() {
  const [ages,] = useState([25, 3, 55, 64, 77, 88, 51]);
  return (
    <Fragment>
      <h2 style={{ color: "green", marginTop: "100px" }} className="foot">
        {ages.map((el, ind) => (
          <p key={ind}>{el}</p>
        ))}
      </h2>
    </Fragment>
  );
}

export default Footer;
