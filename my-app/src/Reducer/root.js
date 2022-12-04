import { combineReducers } from "redux";
import ProductsDatas from "./Products";
import ReviewsDatas from "./Reviews";
const rootReducer = combineReducers({ ProductsDatas, ReviewsDatas });
export default rootReducer;
