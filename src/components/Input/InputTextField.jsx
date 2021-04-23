import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  cssInputText: {},
}));
InputTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object,
};
InputTextField.defaultProps = {
  name: "",
  label: "",
  form: {},
};

function InputTextField(props) {
  const classes = useStyles();
  const { name, label, form } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <Controller
      control={form.control}
      as={TextField}
      className={classes.cssInputText}
      name={name}
      label={label}
      variant="outlined"
      margin="normal"
      fullWidth
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputTextField;
