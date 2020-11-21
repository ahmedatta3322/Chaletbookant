import { Post_SignUp, GET_Error, Post_Login } from "../actionTypes";
const initialState = {
  users: [],
  user: {},
  token: "",
  errorMessg: "",
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
      newState.user = { ...state.user };
      newState.user = action.payload.data;
      // const { data ,token} = action.payload;
      newState.user = action.payload.data;
      // newState.currentAdmin = action.payload.roles;
      // newState.errorMessg = "";
      newState.token = action.payload.token;
      // console.log(newState.currentAdmin, "SUCC");
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
