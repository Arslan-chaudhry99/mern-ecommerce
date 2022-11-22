import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import IncrementData from "./Inc";
const rootReducer = combineReducers({ IncrementData }, applyMiddleware(thunk));
export default rootReducer;
