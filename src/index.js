import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import Footer from "./Components/Footer";
// import Proc from "./Components/Cards";
import Products from "./Components/Products";
import Navv from "./Components/header";
import SectionFilter from "./Components/SectionFilter";
/* Data*/

ReactDom.render(
  <React.StrictMode>
    <Navv/>
    <SectionFilter/>
    <Products/>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
