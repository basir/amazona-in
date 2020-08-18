import React from 'react';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => (
          <li key={product._id}>
            <Product product={product}></Product>
          </li>
        ))}
      </ul>
    </div>
  );
}
