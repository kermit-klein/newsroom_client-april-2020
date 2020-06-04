import { createStore } from "redux";
import rootReducers from "../reducers/rootReducers";

const configureStore = () => {
  return createStore(rootReducers);
};
export default configureStore;
