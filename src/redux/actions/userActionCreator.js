import axios from "axios";
import { authApi } from "../../api/authApi";
import { Post_SignUp, GET_Error, Post_Login } from "../actionTypes";

export const Signup = (newUser) => (dispatch) => {
  return axios
    .post(`${authApi}register`, newUser)
    .then((response) => {
      console.log(response);
      const user = response.data.response.data;
      console.log("data", user);

      if (response.status === 200) dispatch(SignUpSuccess(user));
      // return data.user;
    })
    .catch((err) => {
      console.log(err.response.data.error);
      dispatch(SignUpFailed(err.response.data.error));
      return err.response.data.message;
    });
};

const SignUpSuccess = (user) => {
  return { type: Post_SignUp, payload: user };
};
const SignUpFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
/////////////////////////////login///////////////////
export const logIn = (user) => (dispatch) => {
  return axios
    .post(`${authApi}login`, user)
    .then((response) => {
      console.log(response);
      if (response.data.status === 401) {
        console.log(response.data.message);
        dispatch(LoginFailed(response.data.message));
      } else if (response.status === 200) {
        // console.log(response.data.response.data);
        const data = response.data.response.data;
        const { token } = data;
        localStorage.setItem("token", token);

        dispatch(loginSuccess(data, token));
        // return roles;
      }
    })
    .catch((error) => {
      console.log(error);

      // if (error.response.status === 500)
      // dispatch(LoginFailed(error.response.statusText));
      // else {
      //   dispatch(LoginFailed(error));
      // }
      // return err.message;
    });
};
const loginSuccess = (data, token) => {
  return { type: Post_Login, payload: { data, token } };
};
const LoginFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
