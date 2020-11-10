import { createStore } from "redux";
import searchReducer from "./reducers";

export default function configureStore() {
  
  return createStore(
    searchReducer,
  );
}
