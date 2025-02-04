import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res);
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching data");
        navigate("/");
      });
  }, []);

  return (
    <div>
      <div>
        <h2> Product Name:{singleProduct.productName}</h2>
        <p> Category:{singleProduct.category}</p>
        <p> Price:{singleProduct.price}</p>
        <Link to={"/"}>
          {" "}
          <button>back</button>
        </Link>
      </div>
    </div>
  );
};

export default Read;
