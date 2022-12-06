import React from 'react';

const Product = () => {
  // const products = ['laptop', 'phone', 'modem', 'computer'];
  // eslint-disable-next-line no-unused-vars
  const products = [
    { id: 1, name: 'laptop', price: 500 },
    { id: 2, name: 'phone', price: 200 },
    { id: 3, name: 'modem', price: 50 },
    { id: 4, name: 'laptop', price: 900 },
  ];

  /*
  const productList = products.map((product, index) => {
    return (
      <h3 key={product.id}>
        {product.name}: ${product.price}
      </h3>
    );
    */
  const fruits = ['apple', 'mango', 'banana'];
  const fruitList = fruits.map((fruit, index) => {
    return <h3 key={index}>{fruit}</h3>;
  });
  return <div>{fruitList}</div>;
};

export default Product;
