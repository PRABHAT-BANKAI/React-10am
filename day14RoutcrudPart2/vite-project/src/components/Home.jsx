import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [productData, setProductData] = useState([]);
  // const [sortType, setSortType] = useState("");

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/products/${id}`);
  }

  function handleSort(e) {
    if (e.target.value == "asc") {
      let ascSort = productData.sort((a, b) => a.price - b.price);
      console.log(ascSort)
      setProductData([...ascSort]);
    } else if (e.target.value == "desc") {
      let descSort = productData.sort((a, b) => b.price - a.price);
      setProductData([...descSort]);
    }
  }
  useEffect(() => {
    getDataProduct();
  }, []);
  async function getDataProduct() {
    const getData = await axios.get("http://localhost:5000/products");
    console.log(getData);
    setProductData(getData.data);
  }
  console.log(productData)
  return (
    <div>
      <h1>product list </h1>
      <Link to={"/addData"}>
        <button>Create Product</button>
      </Link>
      <select onChange={handleSort} name="" id="">
        <option value="">select</option>
        <option value="asc">asc</option>
        <option value="desc">dec</option>
      </select>

      <table border={""}>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th> Category</th>
            <th>Price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {productData &&
            productData.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.productName}</td>
                  <td>{element.category}</td>
                  <td>{element.price}</td>
                  <td>
                    <Link to={`/read/${element.id}`}>
                      <button>read</button>
                    </Link>{" "}
                    <Link to={`/edit/${element.id}`}>
                      {" "}
                      <button>edit</button>
                    </Link>{" "}
                    <button
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
