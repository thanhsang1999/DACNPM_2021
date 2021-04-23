import axiosClient from "./axiosClient";

const UploadFile = {
  uploadImage(data) {
    const url = `/test/upload/multipartfile`;
    return axiosClient.post(url, data);
  },
};

export default UploadFile;
