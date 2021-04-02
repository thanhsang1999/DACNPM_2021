import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomFooter from "./components/Footer/CustomFooter";
import CustomHeader from "./components/Header/CustomHeader";
import ListBook from "./features/ListBook/ListBook";
import "./index.css";

App.propTypes = {};

function App(props) {
  return (
    <div className="root">
      <CustomHeader />
      {/* <Switch><Route path="/list" /></Switch> */}
      <ListBook />
      <CustomFooter />
      test
    </div>
  );
}

export default App;
