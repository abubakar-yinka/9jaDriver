export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";
export const SET_PHONE = "SET_PHONE";
export const SET_EMAIL = "SET_EMAIL";

export const setFirstName = (firstname) => (dispatch) => {
  dispatch({
    type: SET_FIRSTNAME,
    payload: firstname,
  });
};

export const setLastName = (lastname) => (dispatch) => {
  dispatch({
    type: SET_LASTNAME,
    payload: lastname,
  });
};

export const setEmail = (email) => (dispatch) => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};

export const setPhone = (phone) => (dispatch) => {
  dispatch({
    type: SET_PHONE,
    payload: phone,
  });
};
