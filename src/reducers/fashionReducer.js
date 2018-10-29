import {GET_NAVBAR, GET_PRODUCTS} from "../actions";
import {GET_PRODUCT_DETAIL} from "../actions/index";
import {ADD_CART} from "../actions/index";
import {REMOVE_CART}from "../actions/index";

const INITIAL_STATE = {navbar: [], products: [], productDetail:[], cartDetail:[]};

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
        return{
            ...state,
            cartDetail: action.payload
        };

        case REMOVE_CART:
        
        const firstMatchIndex = state.indexOf(action.payload)
        return state.filter((item, index) => index!==firstMatchIndex) 
       
        default:
            return state;
    }
}