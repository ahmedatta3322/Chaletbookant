import { combineReducers } from "redux";
import ChaletReducer from "./chaletReducer";
import UserReducer from "./userReducer";
export default combineReducers({
  Chalets: ChaletReducer,
  Users: UserReducer,
});
