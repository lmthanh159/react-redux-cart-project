/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import * as action from '../actions/index';

class ProductsContainer extends Component {
    render() {
        var {products} = this.props;

        return (     
            <Products products={products} onAddToCart={this.props.onAddToCart} onChangeMSG={this.props.onChangeMSG}/>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.addToCart(product, 1));
        },
        onChangeMSG: (message) => {
            dispatch(action.changeMSG(message))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
