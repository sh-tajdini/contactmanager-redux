import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer,//using this as props in others file
});
