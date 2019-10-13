/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import * as msg from '../constances/Message';

class Product extends Component {
    render() {
        var {product} = this.props;

        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" title="" 
                                    data-original-title="Add to Cart"
                                    onClick={() => this.onAddToCart(product)}>
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>         
        );
    }

    showRating = (rating) => {
        var result = [];
        if(rating > 0){
            var fullStar = 0, emptyStar = 0;
            for(var i = 1; i <= parseInt(rating); i++){
                result.push(
                    <li key={i}><i className="fa fa-star"></i></li>
                );
                fullStar++;
            }
            for(var j = 1; j <= parseInt(5 - rating); j++){
                result.push(
                    <li key={i + j}><i className="fa fa-star-o"></i></li>
                );
                emptyStar++;
            }
            if((fullStar + emptyStar) < 5){
                result.push(
                    <li key={i + j + 1}><i className="fa fa-star-half-o"></i></li>
                );
            }
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMSG(msg.MSG_ADD_TO_CART_SUCCESS);
    }
}
export default Product;
