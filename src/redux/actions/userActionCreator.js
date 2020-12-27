import axios from "axios";
import { authApi, baseUrl } from "../../api/authApi";
import {
  Post_SignUp,
  GET_Error,
  Post_Login,
  Get_OnlineUserProfile,
  // Get_Users,
  Post_VerificateMobile,
  Logout,
  Edit_User,
  Post_ChangePassword,
  Post_addAvatar,
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
      console.log(err.response.data.message);
      if (err.response.status === 500) dispatch(SignUpFailed("server error"));
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
      if (error.response.status === 500) dispatch(LoginFailed("Server Out"));
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
// export const getUsers = () => (dispatch) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };

//   axios
//     .get(`${authApi}users`, config)
//     .then((response) => {
//       const users = response.data.response.data;
//       // const pagesNum = response.data.response.meta.last_page;
//       //  console.log(pagesNum);
//       dispatch(getUsersSuccess(users));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const getUsersSuccess = (users) => {
//   return { type: Get_Users, payload: users };
// };
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
////////////////////////////////edit user//////////////
export const EditUser = (editUser) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .put(`${authApi}profile`, editUser, config)
    .then((response) => {
      if (response.status === 200) dispatch(EditUserSuccess(editUser));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const EditUserSuccess = (editUser) => {
  return { type: Edit_User, payload: editUser };
};
////////////////////////////////////change password///////////
export const changePassword = (data) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(`${authApi}change_password`, data, config)
    .then((response) => {
      console.log(response);
      if (response.status === 200)
        dispatch(changePasswordSuccess(response.statusText));
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.status === 422)
        dispatch(changePasswordFailed(err.response.data.error));
      else if (err.response.status === 500)
        dispatch(changePasswordFailed(err.response.data.message));
      return err.response.data.message;
    });
};
const changePasswordSuccess = (status) => {
  return { type: Post_ChangePassword, payload: status };
};
const changePasswordFailed = (errMsg) => {
  return { type: GET_Error, payload: errMsg };
};
//////////////////////verify account/////////////
export const verifyAccount = (document) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  // const data = {};
  // for (var pair of newChalet.entries()) {
  //   data[pair[0]] = pair[1];
  // }
  // console.log(data);
  axios
    .post(`${authApi}verify_user`, document, config)
    .then((response) => {
      console.log(response);
      // const chalet = response.data.response.data;
      // if (response.status === 200) {
      //   dispatch(verifyAccountSuccess(chalet));
      // }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// const verifyAccountSuccess = (newChalet) => {
//   return { type: Post_AddChalet, payload: newChalet };
// };
///////////////////////logout//////////////////////
export const forgetPasword = (email) => (dispatch) => {
  console.log(email);
  axios
    .post(`${baseUrl}password/email`, email)
    .then((response) => {
      console.log(response);
      // console.log(pagesNum);
      // dispatch(getChaletsSuccess(chalets, pagesNum, total));
    })
    .catch((error) => {
      console.log(error.response);
      // dispatch(getChaletsFailed(error.response.data.message));
    });
};
//////////////////////add prof image/////////////
export const addAvatar = (image) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .post(`${authApi}avatar`, image, config)
    .then((response) => {
      console.log(response);
      const user = response.data.response.data;
      if (response.status === 200) {
        dispatch(addAvatarSuccess(user));
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const addAvatarSuccess = (user) => {
  return { type: Post_addAvatar, payload: user };
};
