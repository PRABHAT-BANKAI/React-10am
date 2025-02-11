import React from "react";
import ProductCard from "./ProductCard";

const ProductPage = ({data}) => {
  return (
    <div>
      <ProductCard  data={data} />
    </div>
  );
};

export default ProductPage;
