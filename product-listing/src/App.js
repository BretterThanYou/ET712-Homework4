import React from "react";
import ProductCard from "./ProductCard";
import laptop from './images/laptop.jpg'
import headphones from './images/headphones.jpg'
import smartphone from './images/smartphone.jpg'
import ipad from './images/ipad.jpg'

const App = () => {
  const products = [
    { id: 1, name: "Laptop", image: laptop, price: 899.99, availability: "In Stock" },
    { id: 2, name: "Headphones", image: headphones, price: 199.99, availability: "Out of Stock" },
    { id: 3, name: "Smartphone", image: smartphone, price: 699.99, availability: "In Stock" },
    { id: 4, name: "Tablet", image: ipad, price: 399.99, availability: "In Stock" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          availability={product.availability}
        />
      ))}
    </div>
  );
};

export default App;
