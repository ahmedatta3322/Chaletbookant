import axios from "axios";
import { authApi } from "../../api/authApi";
import {
  Post_SignUp,
  GET_Error,
  Post_Login,
  Get_OnlineUserProfile,
  Get_Users,
  Post_VerificateMobile,
  Logout,
  Get_RentRequests,
} from "../actionTypes";

export const Signup = (newUser) => (dispatch) => {
  return axios
    .post(`${authApi}register`, newUser)
    .then((response) => {
      console.log(response);
      const user = response.data.response.data;
      console.log("data", user);
      const auth = true;
      if (response.status === 200) dispatch(SignUpSuccess(user, auth));
      // return data.user;
    })
    .catch((err) => {
      console.log(err.response.data.error);
      dispatch(SignUpFailed(err.response.data.error));
      return err.response.data.message;
    });
};

const SignUpSuccess = (user, auth) => {
  return { type: Post_SignUp, payload: { user, auth } };
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
      // if (response.data.status === 401) {
      //   console.log(response.data.message);
      //   dispatch(LoginFailed(response.data.message));
      // } else
      if (response.status === 200) {
        // console.log(response.data.response.data);
        const data = response.data.response.data;
        const { token } = data;
        localStorage.setItem("token", token);
        const auth = true;
        dispatch(loginSuccess(data, token, auth));
        // return roles;
      }
    })
    .catch((error) => {
      console.log(error.response.data);
      if (
        error.response.data ===
        "file_put_contents(/var/www/html/projects/chalet/back-end/storage/framework/cache/data/f0/48/f0486f50aa5db0a4a2d804405053a1be6e973b24): failed to open stream: No such file or directory"
      )
        dispatch(LoginFailed("Server Out"));
      // if (error.response.status === 500)
      //   dispatch(LoginFailed(error.response.statusText));
      // else {
      //   dispatch(LoginFailed(error));
      // }
      // return err.message;
    });
};
const loginSuccess = (data, token, auth) => {
  return { type: Post_Login, payload: { data, token, auth } };
};
const LoginFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
///////////////////////logout//////////////////////
export const LogOut = () => (dispatch) => {
  const auth = false;
  const user = {};
  const errorMessg = "Unauthenticated.";
  dispatch(LogOutSuccess(auth, user, errorMessg));
  // return roles;
};
const LogOutSuccess = (auth, user, errorMessg) => {
  return { type: Logout, payload: { auth, user, errorMessg } };
};
////////////////////////get online user profile///////////
export const getOnlineUserProfile = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(`${authApi}profile`, config)
    .then((response) => {
      const user = response.data.response.data;
      // console.log("userrrrrrrrrrrr ", user);
      dispatch(getOnlineUserProfileSuccess(user));
      //return user;
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(getOnlineUserProfileFailed(err.response.data.message));
    });
};
const getOnlineUserProfileSuccess = (user) => {
  return { type: Get_OnlineUserProfile, payload: user };
};
const getOnlineUserProfileFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
//////////////////////////get usesrs////////////
export const getUsers = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .get(`${authApi}users`, config)
    .then((response) => {
      const users = response.data.response.data;
      // const pagesNum = response.data.response.meta.last_page;
      //  console.log(pagesNum);
      dispatch(getUsersSuccess(users));
    })
    .catch((error) => {
      console.log(error);
    });
};
const getUsersSuccess = (users) => {
  return { type: Get_Users, payload: users };
};
/////////////////////////////////////VERIFICATION MOBILE////////////////////
export const verifyMobile = (code) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(`${authApi}verificate_mobile`, code, config)
    .then((response) => {
      console.log(response);
      const mobile_verfied = 1;
      const status = response.data.status;
      if (response.status === 200)
        dispatch(verifyMobileSuccess(mobile_verfied, status));
      // return data.user;
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.status === 422)
        dispatch(verifyMobileFailed(err.response.data.error));
      else if (err.response.status === 500)
        dispatch(verifyMobileFailed(err.response.data.message));
      return err.response.data.message;
    });
};

const verifyMobileSuccess = (mobile_verfied, status) => {
  return { type: Post_VerificateMobile, payload: { mobile_verfied, status } };
};
const verifyMobileFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
////////////////////////////////get rent requests///////////
export const getRentRequests = (status, pageNum) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  axios
    .get(
      `http://app.apptechegy.com/api/system/rentChalet?status=${status}&page=${pageNum}`,
      config
    )
    .then((response) => {
      const data = response.data.response.data;
      const pagesNum = response.data.response.meta.last_page;
      // console.log(data);
      dispatch(getRentRequestsSuccess(data, pagesNum));
    })
    .catch((error) => {
      dispatch(getRentRequestsFailed(error));
      console.log(error);
    });
};

const getRentRequestsSuccess = (rentRequests, pagesNum) => {
  return {
    type: Get_RentRequests,
    payload: { rentRequests, pagesNum },
  };
};
const getRentRequestsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
