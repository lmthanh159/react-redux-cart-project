import * as types from '../constances/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    };
};

export const changeMSG = (message) => {
    return {
        type: types.CHANGE_MSG,
        message
    };
};

export const deleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    };
};

export const updateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    };
};