import { combineReducers } from "redux";
import search from "./searchReducer";

const rootReducer = combineReducers({
  search: search
});

export default rootReducer;
