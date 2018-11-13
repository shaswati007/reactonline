import axios from 'axios';

export const GET_NAVBAR = "GET_NAVBAR";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const VIEW_CART = "VIEW_CART";
export const PRE_CHECKOUT = "PRE_CHECKOUT";
export const LOGIN = "LOGIN";


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
    console.log(window.localStorage.getItem('WCToken'));
    console.log(window.localStorage.getItem('WCTrustedToken'));
    var headers = {
        'Content-Type': 'application/json',
        'WCToken': window.localStorage.getItem('WCToken'),
        'WCTrustedToken': window.localStorage.getItem('WCTrustedToken')
    }
    var args = {
        "orderItem": [
            {
                "productId": "12262",//item.uniqueID, //working for 12262
                "quantity": "1"
            }
        ]
    };
    var data = {headers: headers, data: args};
    return axios.post(BASE_API_URL + "/cart", data).then(res => {
            console.log(res)
            return {
                type: ADD_CART,
                payload: item
            }
        }
    )
        .catch(err => console.log(err));

}

export function removeFromCart(cartList, id) {
    return {
        type: REMOVE_CART,
        payload: cartList.filter(i => i.orderItemId !== id)
    };
}

export function viewCart() {

    console.log(window.localStorage.getItem('WCToken'))
    console.log(window.localStorage.getItem('WCTrustedToken'))
    var headers = {
        'Content-Type': 'application/json',
        'WCToken': window.localStorage.getItem('WCToken'),
        'WCTrustedToken': window.localStorage.getItem('WCTrustedToken')
    }

    var data = {headers: headers};
    return axios.post(BASE_API_URL + "/viewcart", data).then(res => {
            console.log(res)
            return {
                type: VIEW_CART,
                payload: res.data.express.orderItem
            };
        }
    )
        .catch(err => console.log(err));

}


export function preCheckout() {

    console.log(window.localStorage.getItem('WCToken'))
    console.log(window.localStorage.getItem('WCTrustedToken'))
    var headers = {
        'Content-Type': 'application/json',
        'WCToken': window.localStorage.getItem('WCToken'),
        'WCTrustedToken': window.localStorage.getItem('WCTrustedToken')
    }

    var data = {headers: headers};
    return axios.post(BASE_API_URL + "/precheckout", data).then(res => {
            console.log(res)
            return {
                type: VIEW_CART,
                payload: res.data.express
            };
        }
    )
        .catch(err => console.log(err));

}


export const login = () => {
    return axios.post(BASE_API_URL + "/guestidentity", {}).then(res => {
        window.localStorage.setItem("WCToken", res.data.express.WCToken)
        window.localStorage.setItem("WCTrustedToken", res.data.express.WCTrustedToken)
        return {
            type: LOGIN,
            payload: {}
        }
    }).catch(e => {
        console.log(e);
        return {
            type: LOGIN,
            payload: {}
        }
    });
};