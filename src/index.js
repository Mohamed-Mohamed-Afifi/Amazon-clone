import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import Footer from "./Components/Footer";
// import Proc from "./Components/Cards";
import Products from "./Components/Products";
import Navv from "./Components/header";
// import Client from "./Components/Clients";
import ClientFactory from "./Components/ClientData";
import Log from "./Components/log";
import Todo from "./Components/todo";
// import App from "./Components/App";
import Test from "./Components/test"
import { Provider } from 'react-redux';
import store from "./Components/redux/store"
import Filtertest from "./Components/filtertest"
import ShowData from "./Components/showData";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

/* Data*/

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navv />
        <ShowData />
        <Test />
        <Filtertest />
        <Log />
        <Products />
        <Todo />
        <ClientFactory />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
