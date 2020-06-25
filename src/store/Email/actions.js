import myAxios from "axios";
import { apiUrl } from "../../Config/constants";
import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";

export const newEmail = (responseMessage) => {
  return { type: "SEND_EMAIL", payload: responseMessage };
};

export const sendEmail = (title, content) => async (dispatch, getState) => {
  const { email, firstName, token } = getState().user;

  //console.log("Details:", email, firstName, lastName, userName, token);

  try {
    const response = await myAxios.post(
      `${apiUrl}/sendMail`,
      {
        userEmail: email,
        userName: firstName,
        title,
        message: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log("Here sendmail response from server: ", response.data);
    dispatch(newEmail(response.data));
    dispatch(showMessageWithTimeout("success", true, response.data.message));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
