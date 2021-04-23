import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:25001/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    // "Content-Type": "applicatinon/json",
  },
});
//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // console.log(config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('ERROR', error.response);
    // const { config, data, status } = error.response;
    // const url = '/auth/local/register';
    // if (config.url === url && status === 400) {
    //   const datadata = data.data || [];
    //   const tmpMessages = datadata.length > 0 ? datadata[0] : {};
    //   const messages = tmpMessages.messages || [];
    //   const message = messages.length > 0 ? messages[0] : {};
    //   throw new Error(message.message);
    // }
    return error.response;
  }
);
export default axiosClient;
