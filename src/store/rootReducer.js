import { combineReducers } from "redux";
import user from "./user/reducer";
import post from "./post/reducer";

export default combineReducers({
  user,
  post,
});
