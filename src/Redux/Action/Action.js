import {
  DELETE_USER,
  EDIT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
} from "../ActionType";

export const SingUpCreate = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};
export const SingInCreate = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const DeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const EditUser = (id) => {
  return {
    type: EDIT_USER,
    payload: id,
  };
};
export const UpdateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload:data,
  };
};
export const LogoutUser = () => {
  return {
    type:LOGOUT_USER,
    
  };
};