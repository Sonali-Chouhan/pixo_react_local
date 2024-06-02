import { combineReducers } from "redux";
import Reducer from "./Reducer";

const rootReducer = combineReducers ({
    users: Reducer
});
export default rootReducer;