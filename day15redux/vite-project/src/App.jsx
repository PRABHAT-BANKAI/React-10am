import { useState } from "react";
import image from "./assets/react.svg";
import "./App.css";
import ProductPage from "./components/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/features/counterSlice";
import ExtraCom from "./components/ExtraCom";

function App() {
  const countValue = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch()

  // const [product, setProduct] = useState({
  //   id: 1,
  //   name: "Product 1",
  //   description: "This is product 1",
  //   price: 100,
  //   image: "/product1.jpg",
  // });

  return (
    <>
      {/* <ProductPage data={product} />
      <img src={image} alt="" /> */}

      <h1>redux toolkit</h1>

      <p>Count : {countValue}</p>
      <button onClick={()=>dispatch(increment())}>Increament</button>
      <ExtraCom/>
    </>
  );
}

export default App;
