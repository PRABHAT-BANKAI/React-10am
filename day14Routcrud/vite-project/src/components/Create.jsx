import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    productName: "",
    category: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData({
      productName: "",
      category: "",
      price: "",
    });

    createData();
    alert("you product add successfully")
      }

  async function createData() {
    await axios.post("http://localhost:5000/products", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name of Product</label>
        <input
          type="text"
          value={data.productName}
          onChange={(e) => {
            setData({ ...data, productName: e.target.value });
          }}
        />{" "}
        <br />
        <label htmlFor="">Category</label>
        <input
          type="text"
          value={data.category}
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
        />{" "}
        <br />
        <label htmlFor="">Price</label>
        <input
          type="number"
          value={data.price}
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
          }}
        />
        <button>submit</button>
      </form>

     <Link to={"/"}> <button>Back</button></Link>
    </div>
  );
};

export default Create;
 