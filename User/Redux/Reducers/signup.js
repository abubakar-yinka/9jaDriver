import {
  SET_EMAIL,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PHONE,
} from "../Actions/signup";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIRSTNAME:
      return { ...state, firstname: action.payload };
    case SET_LASTNAME:
      return { ...state, lastname: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PHONE:
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}

export default userReducer;
