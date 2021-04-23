import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axiosClient from "../../api/axiosClient";
import UploadFile from "../../api/UploadFile";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import ButtonUploadFW from "../../components/Button/ButtonUploadFW";
import InputTextField from "../../components/Input/InputTextField";
import MutilLineInput from "../../components/Input/MutilLineInput";
//css
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background: "var(--colorWhite1)",
  },
  cssForm: {
    margin: "20px 0px",
    background: "var(--colorWhite0)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column nowrap",
    padding: "20px",
    borderRadius: "10px",
    width: "26%",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "36%",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    textAlign: "center",
    display: "block",
    fontWeight: "700",
    margin: "50px 0 30px 0",
  },
  text1: {
    marginTop: "40px",
    display: "block",
    textAlign: "center",
    color: "var(--colorBlack1)",
  },
  textDK: {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    color: "var(--colorBlack2)",
    "&:hover": {
      color: "var(--colorOrange1)",
    },
  },
  text3: {
    margin: "10px 0px 10px 0px",
    display: "block",
    textAlign: "right",
    textDecoration: "none",
    color: "var(--colorBlack2)",
    "&:hover": {
      color: "var(--colorOrange1)",
    },
  },
}));
//proptypes
UploadBook2.propTypes = {};

//yup

const schema = yup.object().shape({});
//function
function UploadBook2(props) {
  const { onSubmit } = props;
  const [dataUpload, setDataUpload] = useState({
    title: "",
    img: null,
    description: "",
  });
  const classes = useStyles();
  const form = useForm({
    defaultValues: {
      title: "",
      img: null,
      description: "",
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("img", dataUpload.img);
      const data = await UploadFile.uploadImage(formData);
      console.log("Upload File", data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleOnChange(data) {
    console.log(data.name);
    const tmpDataUpload = { ...dataUpload };
    tmpDataUpload.img = data;
    setDataUpload(tmpDataUpload);
  }
  return (
    <div className={classes.root}>
      <form
        className={classes.cssForm}
        onSubmit={form.handleSubmit(handleOnSubmit)}
      >
        <span className={classes.title}>Form Upload Book</span>
        <InputTextField name="title" label="Tiêu đề" form={form} />
        <MutilLineInput name="description" label="Mô tả" form={form} />

        <ButtonUploadFW
          title="Upload"
          name="img"
          form={form}
          onChange={handleOnChange}
        />
        <ButtonSubmit title="Submit" />
      </form>
    </div>
  );
}

export default UploadBook2;
