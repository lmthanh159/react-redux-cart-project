/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
    render() {
        var {products, onAddToCart, onChangeMSG} = this.props;

        return (     
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                   {this.showProducts(products, onAddToCart, onChangeMSG)}
                </div>
            </section>     
        );
    }

    showProducts = (products, onAddToCart, onChangeMSG) => {
        var result = null;

        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMSG={onChangeMSG}/>
            });
        }

        return result;
    }
}

export default Products;
