import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomFooter from "./components/Footer/CustomFooter";
import CustomHeader from "./components/Header/CustomHeader";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import ListBook from "./features/ListBook/ListBook";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import UploadBook2 from "./features/UploadBook/UploadBook2";
import "./index.css";

App.propTypes = {};

function App(props) {
  return (
    <div className="root">
      <CustomHeader />
      {/* <Switch><Route path="/list" /></Switch> */}
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/forgot-password" component={ForgotPassword} exact />
      <Route path="/list" component={ListBook} exact />
      <Route path="/upload" component={UploadBook2} exact />
      <CustomFooter />
    </div>
  );
}

export default App;
