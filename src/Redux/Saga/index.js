import { all } from "redux-saga/effects";
import { Usersaga } from "./Saga";


export default function* rootSaga() {
  yield all([
    Usersaga()
  ])
}