import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 29.99,
  },
  // Add more product data as needed
];

function ProductList() {
  const [products] = useState(productsData);

  return (
    <div>
      <h1>Online Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add "Add to Cart" button and functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
