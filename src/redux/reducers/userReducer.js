import {
  Post_SignUp,
  GET_Error,
  Post_Login,
  Get_OnlineUserProfile,
  Get_Users,
  Post_VerificateMobile,
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
      newState = { ...state };
      newState.users = [...state.users, action.payload];
      localStorage.setItem("token", action.payload.token);
      newState.token = action.payload.token;
      break;
    case GET_Error:
      newState = { ...state };
      console.log(action.payload);
      newState.errorMessg = action.payload;
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
    case Get_Users:
      newState = { ...state };
      newState.users = action.payload;
      break;
    case Post_VerificateMobile:
      newState = { ...state };
      const mobile_verfied = action.payload.mobile_verfied;
      newState.status = action.payload.status;
      newState.user = { ...state.user, mobile_verfied };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
