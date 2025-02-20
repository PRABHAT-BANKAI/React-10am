import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const [sortType, setSortType] = useState("");

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/products/${id}`);
  }

  function handleSort(e) {
    if (e.target.value == "asc") {
      let ascSort = productData.sort((a, b) => a.price - b.price);
      console.log(ascSort);
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
    setFilterData(productData);
  }

  useEffect(() => {
    let filterProducts = productData;
    let newSearch = search.toLowerCase();
    if (search) {
      filterProducts = filterProducts.filter((item) =>
        item.productName.toLowerCase().includes(newSearch)
      );
    }
    if (category != "All") {

      filterProducts = filterProducts.filter(
        (item) => item.category === category
      );
    }
    

    setFilterData(filterProducts);
  }, [search,category]);

  return (
    <div>
      <h1>product list </h1>
      <select
        name=""
        
        id=""
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="All">All</option>
        <option value="men">Men</option>
        <option value="shoes">Shoes</option>
        <option value="shirt">Shirt</option>
      </select>
      <input
        type="text"
        placeholder="Search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
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
          {filterData &&
            filterData.map((element) => {
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
