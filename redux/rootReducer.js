import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer";
import counterReducer from "./counter/CounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  loggedIn: loginReducer,
});

export default rootReducer;
