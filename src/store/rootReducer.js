import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import post from "./post/reducer";
//import email from "./Email/reducer";
import myPosts from "./myPosts/reducer";

export default combineReducers({
  appState,
  user,
  myPosts,
  post,
});
