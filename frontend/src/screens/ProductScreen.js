import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div>
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                text={product.numReviews + ' reviews'}
              ></Rating>
            </li>
            <li>
              Price: <span className="price">${product.price}</span>
            </li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              <div>Price</div>
              <div>${product.price}</div>
            </li>
            <li>
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? (
                  <span className="success">In Stock</span>
                ) : (
                  <span className="error">Unavailable</span>
                )}
              </div>
            </li>
            {product.countInStock > 0 && (
              <li>
                <div>Qty</div>
                <div>
                  <select>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            )}
            {product.countInStock > 0 && (
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
