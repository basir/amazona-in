import React from 'react';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen(props) {
  const category = props.match.params.id ? props.match.params.id : '';
  let products = data.products;
  if (category) {
    products = products.filter((x) => x.category === category);
  }
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <Product product={product}></Product>
          </li>
        ))}
      </ul>
    </div>
  );
}
