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
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response:", response);
    dispatch(addPost(response.data.newPost));
  } catch (error) {
    console.log(error);
  }
};
