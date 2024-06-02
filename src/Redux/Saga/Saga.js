import { put, takeEvery } from "redux-saga/effects";
import { DELETE_USER, DELETE_USER_UP, EDIT_USER, EDIT_USER_UP, LOGIN_USER, lOGIN_USER_UP, LOGOUT_USER, LOGOUT_USER_UP, REGISTER_USER, REGISTER_USER_UP, UPDATE_USER, UPDATE_USER_UP } from "../ActionType";

function* SingupUsers(action) {

  yield put({
    type: REGISTER_USER_UP,
    payload: action.payload,
  });
}
function* SingInUser(action) {
  yield put({
    type: lOGIN_USER_UP,
    payload: action.payload,
  });
}
function* DeletedUsers(action) {
  yield put({
    type: DELETE_USER_UP,
    payload: action.payload,
  });
}
// function* SingleUsers(action) {

// }
function* editUsers(action) {
  
  yield put({
    type: EDIT_USER_UP,
    payload: action.payload,
  });
}
function* UpdatedUsers(action) {
  yield put({
    type: UPDATE_USER_UP,
    payload: action.payload,
  });
}
function* RemoveUsers() {
  yield put({
    type: LOGOUT_USER_UP,
  })
}

export function* Usersaga() {
  yield takeEvery(REGISTER_USER, SingupUsers);
  yield takeEvery(LOGIN_USER, SingInUser);
  yield takeEvery(DELETE_USER, DeletedUsers);
  yield takeEvery(EDIT_USER, editUsers);
  yield takeEvery(UPDATE_USER, UpdatedUsers);
  yield takeEvery(LOGOUT_USER, RemoveUsers);
}