import { createStore } from "redux";
import rootReducer from "./Reducer/root";
const store = createStore(rootReducer);
export default store;
