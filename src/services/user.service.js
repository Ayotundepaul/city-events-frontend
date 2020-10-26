import { Routes } from "../../constants";
import axios from "axios";

const verifyUserEmail = async (token) => {
  return await axios
    .put(Routes.mailVerification + token, {
      "Content-Type": "application/json",
    })
    .then((res) => {
      return {
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        status: err.response.data.status,
        message: err.response.data.message,
      };
    });
};

const regenerateEmailToken = async (email) => {
  return await axios
    .post(Routes.regenerateEmailToken, { email })
    .then((res) => {
      console.log(res.data)
      return {
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      console.log(err.response.data)
      return {
        status: err.response.data.status,
        message: err.response.data.message,
      };
    });
};

const forgotPassword = async (email) => {
  return await axios
    .post(Routes.forgetPassword, { email: email })
    .then((res) => {
      return {
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        status: err.response.data.status,
        message: err.response.data.message,
      };
    });
};

const resetPassword = async (password, token) => {
  return await axios
    .post(Routes.reset_password + token, { password })
    .then((res) => {
      return {
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        status: err.response.data.status,
        message: err.response.data.message,
      };
    });
};

export { verifyUserEmail, regenerateEmailToken, forgotPassword, resetPassword };
