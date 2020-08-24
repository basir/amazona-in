import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name}></img>
      </Link>
      <div className="product-name">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
      </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-rating">
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
        ></Rating>
      </div>
    </div>
  );
}
