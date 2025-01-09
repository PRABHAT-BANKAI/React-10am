import React, { useState } from "react";
import Footer from "./Footer";

const Section = ({count}) => {
  // let [count, setCount] = useState(1);// always hook on top in functional components


  // function handleInc(){
  //   setCount(count + 1);
  // }
  return <div>count :{count}
  <button  >increment</button>
  <Footer  count={count}/>
  </div>;
};

export default Section;
