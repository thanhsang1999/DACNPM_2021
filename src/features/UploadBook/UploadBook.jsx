// import React from "react";
// import PropTypes from "prop-types";
// import InputTextField from "../../components/Input/InputTextField";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button } from "@material-ui/core";

import {
  Container,
  Grid,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { post } from "axios";
import React, { useState } from "react";

// UploadBook.propTypes = {};
// const schema = yup.object().shape({
//   title: yup.string().required("Vui lòng nhập title"),
// });
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Open Sans', sans-serif",
    margin: "30px 20px 40px 20px",
    "&>form": {
      display: "flex",
      flexDirection: "column",
      padding: "30px 20px 40px 20px",
      borderRadius: "20px",
      backgroundImage:
        "linear-gradient(to bottom,var(--colorOrange2) ,var(--colorOrange1))",
      "&>.form__title": {
        fontSize: 30,
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        color: "var(--colorWhite1)",
        marginBottom: 30,
      },
      "&>.form__input__title": {
        marginBottom: 20,
        "&>label": {
          color: "var(--colorWhite0)",
        },
        "&>div:first-of-type": {
          "&>input": {
            color: "var(--colorWhite1)",
          },
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "var(--colorWhite1)",
          },
          "&:hover fieldset": {
            borderColor: "var(--colorWhite1)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--colorWhite1)",
          },
        },
      },
    },
  },
}));
function UploadBook(props) {
  const [file, setFile] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    fileUpload(file.file).then((response) => {
      console.log(response.data);
    });
  };

  function onChange(e) {
    setFile({ file: e.target.files[0] });
    // console.log(e.target.files[0]);
  }

  const fileUpload = async (file) => {
    console.log(file);
    const url = "http://192.168.0.222:25001/test/upload/multipartfile";
    const formData = new FormData();
    formData.append("img", file);
    formData.append("title", "sang");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form onSubmit={onFormSubmit}>
        <span className="form__title">Form Upload Book</span>
        <TextField
          className="form__input__title"
          name="title"
          label="Title"
          variant="outlined"
        />
        <input type="file" name="img" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadBook;
