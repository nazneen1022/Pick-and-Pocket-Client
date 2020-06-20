import myAxios from "axios";
import { apiUrl } from "../../Config/constants";
import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";

export const newEmail = (responseMessage) => {
  return { type: "SEND_EMAIL", payload: responseMessage };
};

export const sendEmail = (content) => async (dispatch, getState) => {
  const { email, firstName, lastName, token } = getState().user;
  const userName = `${firstName},${lastName}`;

  //console.log("Details:", email, firstName, lastName, userName, token);

  try {
    const response = await myAxios.post(
      `${apiUrl}/sendMail`,
      { userEmail: email, userName, message: content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log("Here sendmail response from server: ", response);
    dispatch(newEmail(response.data));
    dispatch(showMessageWithTimeout("success", true, response.data.message));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
