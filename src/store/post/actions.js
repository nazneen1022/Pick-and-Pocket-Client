import axios from "axios";
import { apiUrl } from "../../Config/constants";
import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";

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

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const submitPost = (
  title,
  description,
  imageUrl,
  startTime,
  endTime
) => async (dispatch, getState) => {
  const { id, token } = getState().user;

  try {
    const response = await axios.post(
      `${apiUrl}/posts`,
      {
        title,
        description,
        imageUrl,
        startTime,
        endTime,
        latitude: 52.0369643,
        longitude: 4.3152622,
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(addPost(response.data.newPost));
    dispatch(showMessageWithTimeout("success", true, "New post created"));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
