import {
  DELETE_USER_UP,
  EDIT_USER_UP,
  lOGIN_USER_UP,
  LOGOUT_USER_UP,
  REGISTER_USER_UP,
  UPDATE_USER_UP,
} from "../ActionType";
const initialState = {
  Register_user: localStorage.getItem("createdusers")
    ? JSON.parse(localStorage.getItem("createdusers"))
    : [],
  isAuth: localStorage.getItem("token") ? localStorage.getItem("token") : false

};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_UP:
      const data = state.Register_user;
      data.push(action.payload);
      localStorage.setItem("createdusers", JSON.stringify(data));
      return {
        ...state,
        Register_user: [...data],
        create: action.payload
      };
    case lOGIN_USER_UP:
      var Token, message
      const object = localStorage.getItem("createdusers");
      var record = JSON.parse(object);
      record?.forEach((element) => {
        if (
          element.password === action.payload.password &&
          element.email === action.payload.email
        ) {
          Token = "gsadhy3724351/323knmds./309023473247";
          localStorage.setItem("token", JSON.stringify(Token));
          message = true;
          const login_user = []
          login_user.push(action.payload)
          localStorage.setItem("login", JSON.stringify(login_user))
        }
      });
      return {
        ...state,
        isAuth: Token,
        message: message,
        login: action.payload

      };
    case DELETE_USER_UP:
      let Delete = JSON.parse(localStorage.getItem("createdusers"));
      Delete.splice(action.payload, 1);
      localStorage.setItem("createdusers", JSON.stringify(Delete));
      return {
        ...state,
        Register_user: [...Delete],
        delete: Delete
      };
    case EDIT_USER_UP:
      debugger
      let alldata = JSON.parse(localStorage.getItem("createdusers"));
      const Record = alldata[action.payload];
      console.log("dd0", Record);
      return {
        ...state,
        isEdit: Record,
        id: action.payload,
      };
    case UPDATE_USER_UP:
      const Update = JSON.parse(localStorage.getItem("createdusers"));
      const Updatedata = action.payload
      Update.splice(action.payload.id, 1, Updatedata);
      localStorage.setItem("createdusers", JSON.stringify(Update));
      return {
        ...state,
        Register_user: Update,
        Updatedata: Update
      };
    case LOGOUT_USER_UP:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuth: false
      }
    default:
      return state;
  }
};
export default Reducer;