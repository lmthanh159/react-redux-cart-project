/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constances/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as action from '../actions/index';

class CartContainer extends Component {
    render() {
        var {cart, onDelete, onChangeMSG, onUpdateCart} = this.props;

        return (     
            <Cart>
                {this.showCartItem(cart, onDelete, onChangeMSG, onUpdateCart)}
                {this.showResult(cart)}
            </Cart>
        );
    }

    showCartItem = (cart, onDelete, onChangeMSG, onUpdateCart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;

        if(cart.length > 0){
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item} index={index} 
                        onDelete={onDelete} onChangeMSG={onChangeMSG} onUpdateCart={onUpdateCart}/>
            });
        }
        return result;
    }

    showResult = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart}/>;
        }
        return result;
    }
    
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onUpdateCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (product) => {
            dispatch(action.deleteProductInCart(product));
        },
        onChangeMSG: (message) => {
            dispatch(action.changeMSG(message))
        },
        onUpdateCart: (product, quantity) => {
            dispatch(action.updateProductInCart(product, quantity));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
