import {GET_NAVBAR, GET_PRODUCTS, GET_PRODUCT_DETAIL, ADD_CART, REMOVE_CART} from "../actions";

const INITIAL_STATE = {navbar: [], products: [], productDetail: [], cartDetail: []};

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
            };

        case ADD_CART:
            return {
                ...state,
                cartDetail: [...state.cartDetail, action.payload]
            };

        case REMOVE_CART:
            return {
                ...state,
                cartDetail: action.payload
            }

        default:
            return state;
    }
}