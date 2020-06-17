import axios from "axios";
import { apiUrl } from "../../Config/constants";

export const getPosts = (posts) => {
  return { type: "FETCH_ALL_POSTS", payload: posts };
};

export const fetchAllPosts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/posts`);

    dispatch(getPosts(response.data));
  } catch (error) {
    console.log(error);
  }
};
