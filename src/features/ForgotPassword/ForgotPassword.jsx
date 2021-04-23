import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputTextField from "../../components/Input/InputTextField";
import InputTextFieldPassword from "../../components/Input/InputTextFieldPassword";
import userApi from "../../api/userApi";
import { Link } from "react-router-dom";
ForgotPassword.propTypes = {};

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập email"),
});
function ForgotPassword(props) {
  // const
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const handleOnsubmit = async (value) => {
    const data = await userApi.fogotPassword(value);
    console.log(data);
  };
  return (
    <>
      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={form.handleSubmit(handleOnsubmit)}>
                  <div className="group-input">
                    <InputTextField name="email" label="Email" form={form} />
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <Link to="/forget-password" className="forget-pass">
                        Forget your Password
                      </Link>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">
                    Sign In
                  </button>
                </form>
                <div className="switch-login">
                  <Link to="/register" className="or-login">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
