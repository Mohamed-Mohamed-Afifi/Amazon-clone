import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Navv from "./Components/header";
/* Data*/

ReactDom.render(
  <React.StrictMode>
    <Navv/>
    <Cards/>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
