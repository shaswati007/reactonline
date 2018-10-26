import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "../reducers";
import promise from "redux-promise";

export const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(promise))
);