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
} from "../actionTypes";
const initialState = {
  users: [],
  user: {},
  currentUser: {},
  token: "",
  errorMessg: "",
  auth: false,
  status: "",
};
export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Post_SignUp:
      const { user } = action.payload;
      newState = { ...state };
      newState.user = { ...state.user };
      newState.user = user;
      localStorage.setItem("token", action.payload.user.token);
      newState.token = action.payload.token;
      newState.errorMessg = "";
      newState.auth = action.payload.auth;
      break;
    case GET_Error:
      newState = { ...state };
      console.log(action.payload);
      newState.errorMessg = action.payload;
      newState.status = "";
      break;
    case Post_Login:
      newState = { ...state };
      newState.currentUser = { ...state.currentUser };
      newState.currentUser = action.payload.data;
      // const { data ,token} = action.payload;
      newState.currentUser = action.payload.data;
      // newState.currentAdmin = action.payload.roles;
      newState.errorMessg = "";
      newState.token = action.payload.token;
      newState.auth = action.payload.auth;
      // console.log(newState.currentAdmin, "SUCC");
      break;
    case Get_OnlineUserProfile:
      newState = { ...state };
      newState.user = action.payload;
      break;
    // case Get_Users:
    //   newState = { ...state };
    //   newState.users = action.payload;
    //   break;
    case Post_VerificateMobile:
      newState = { ...state };
      const mobile_verfied = action.payload.mobile_verfied;
      newState.status = action.payload.status;
      newState.user = { ...state.user, mobile_verfied };
      newState.errorMessg = "";
      break;
    case Logout:
      newState = { ...state };
      newState.auth = action.payload.auth;
      newState.user = action.payload.user;
      newState.errorMessg = action.payload.errorMessg;
      break;
    case Edit_User:
      newState = { ...state };
      let editUser = action.payload;
      newState.user = { ...state.user, ...editUser };
      break;
    case Post_ChangePassword:
      newState = { ...state };
      newState.status = action.payload;
      newState.errorMessg = "";
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
