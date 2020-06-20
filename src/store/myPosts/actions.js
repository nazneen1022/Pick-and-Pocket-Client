import axios from "axios";
import { apiUrl } from "../../Config/constants";

export const getMyPosts = (posts) => {
  return { type: "FETCH_MY_POSTS", payload: posts };
};

export const fetchMyPosts = () => async (dispatch, getState) => {
  const userId = getState().user.id;
  try {
    const response = await axios.get(`${apiUrl}/user/${userId}/posts`);

    dispatch(getMyPosts(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = (status) => {
  return { type: "UPDATE_POST_STATUS", payload: status };
};

export const confirmWork = (postId) => async (dispatch, getState) => {
  const { token, id } = getState().user;
  try {
    const response = await axios.patch(
      `${apiUrl}/user/${id}/posts/${postId}`,
      { status: "Completed" },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response:", response.data);
  } catch (error) {
    console.log(error);
  }
};
