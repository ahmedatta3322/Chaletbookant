import { combineReducers } from "redux";
import ChaletReducer from "./chaletReducer";
import UserReducer from "./userReducer";
import RequestReducer from "./requestReducer";
export default combineReducers({
  Chalets: ChaletReducer,
  Users: UserReducer,
  Requests: RequestReducer,
});
