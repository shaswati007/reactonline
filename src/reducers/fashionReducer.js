import {GET_NAVBAR, GET_PRODUCTS} from "../actions";
import {GET_PRODUCT_DETAIL} from "../actions/index";

const INITIAL_STATE = {navbar: [], products: [], productDetail:[]};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_NAVBAR:
            return {
                ...state,
                navbar: action.payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        default:
            return state;
    }
}