import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]); // useState hook react
  const [loading,setLoading] = useState(false)

  // mount
  // update mount
  // unmount
  async function get() {
    setLoading(true);
    let data = await fetch("https://fakestoreapi.com/products");
    let result = await data.json();
    setData(result);
    setLoading(false);
  }
  useEffect(() => {
    get();
    return () => {
      console.log("clean up");

    };
  },[]);
  // without []  array
  //[]
  //[value]

  return (
    <div>
      {loading && <h1>Loading...</h1>} 
      {data && data.map((element) => {
        return (
          <div key={element.id}>
            <h1>{element.title}</h1>
            <img src={element.image} alt="" height={"100px"} />
            <p>price:{element.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
