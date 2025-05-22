import React, { useCallback } from "react";
import GetProductsButton from "./GetProductsButton";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = useCallback(async () => {
    const req = await fetch("https://dummyjson.com/products");
    const res = await req.json();
    setProducts(res.products);
  }, []);

  return (
    <div>
      <h1>ProductList</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
      <GetProductsButton onClick={fetchProducts} />
    </div>
  );
};

export default ProductList;
