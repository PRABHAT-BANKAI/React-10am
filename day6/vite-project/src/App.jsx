import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Products from "./components/Products";
import axios from "axios";

function App() {
  // functional component // hooks is a feature of react  ,use in functional component
  const [boolean, setBoolean] = useState(false); // [state,setFunction] // useState always on a top
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState();

  function handleColor() {
    setBoolean(!boolean); // toggle the boolean value
  }
  useEffect(() => {
    // console.log("useeffects");
    fetchProducts();
  }, [count]);// infinite call , [] first time call when page is rendering , [value] when value is chnaged then use effect will be called

  async function fetchProducts() {
    let products = await axios.get("https://fakestoreapi.com/products");
    // console.log(products.data);
    setProducts(products.data);
  }

  // console.log("1");
  console.log("prod", products);

  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: boolean ? "black" : "white",
          color: boolean ? "white" : "black",
          border: "1px solid black",
        }}
      >
        <button onClick={handleColor}>Dark mode</button>
        <h1>hello world</h1>
        <p>Count:{count}</p>
        <button onClick={()=>{setCount(count+1)}}> inc</button>
      </div>

      <div className="Main-container" style={{ display: "flex", gap: "5px",flexWrap:"wrap" }}>
        {products &&
          products.map((element) => {
            return (
              <Products
                key={element.id} // {}objects
                category={element.category}
                description={element.description}
                image={element.image}
                price={element.price}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
