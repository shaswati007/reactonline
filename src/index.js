import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store";


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>), document.getElementById("root")
);