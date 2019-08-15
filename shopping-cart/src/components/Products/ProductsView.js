import React from 'react';

const Products = ({ products = [], addToCart }) =>  console.log(products) ||
  products.length > 0 ? (
    <ul>
      {products.map(({ id, name, price }) => (
        <li key={id}>
          <p>
            <b>{name}</b>
          </p>
          <p>Цена: {price}</p>
          <button onClick={() => addToCart(id)}>Добавить в корзину</button>
          <hr />
        </li>
      ))}
    </ul>
  ) : null;

export default Products;
