import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    productName: "",
    category: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("hello")
    axios
      .put(`http://localhost:5000/products/${id}`, data)
      .then((response) => {
        console.log(response);
        alert("Product updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating product");
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

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

      <Link to={"/"}>
        {" "}
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Update;
