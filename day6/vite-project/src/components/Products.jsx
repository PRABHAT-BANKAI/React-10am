import React from "react";

const Products = ({ category, description, price, image }) => {
  return (
    <div className="card" style={{ width: "500px", border:"1px solid black" }}>
      <img
        style={{ height: "200px" }}
        src={image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>
  );
};

export default Products;
