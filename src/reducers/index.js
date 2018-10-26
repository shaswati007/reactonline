import { combineReducers } from "redux";
import fashion from "./fashionReducer";
export const rootReducer = combineReducers({
    fashion: fashion
});