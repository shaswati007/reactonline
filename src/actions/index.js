import axios from 'axios';

export const GET_NAVBAR = "GET_NAVBAR";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART"

export const BASE_API_URL = "http://localhost:3030";


export const getNavbar = () => {
    return axios.get(BASE_API_URL + '/topCategory').then(res => {
        return {
            type: GET_NAVBAR,
            payload: res.data.express.catalogGroupView
        };
    });
};

export const getProducts = (id) => {
    return axios.get(BASE_API_URL + '/category/' + id).then(res => {
        return {
            type: GET_PRODUCTS,
            payload: res.data.express.catalogEntryView
        };
    });
};

export const getProductDetail = (id) => {
    return axios.get(BASE_API_URL + '/product/' + id).then(res => {
        return {
            type: GET_PRODUCT_DETAIL,
            payload: res.data.express.catalogEntryView
        };
    });
};

export function addToCart(item) {
    return {
        type: ADD_CART,
        payload: item
    };
}

export function removeFromCart(cartList, id) {
    return {
        type: REMOVE_CART,
        payload: cartList.filter(i => i.uniqueID != id)
    };
}