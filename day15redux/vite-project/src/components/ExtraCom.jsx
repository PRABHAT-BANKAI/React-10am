import React from "react";
import { useSelector } from "react-redux";

const ExtraCom = () => {
  const countValue = useSelector((state) => state.counter.count);
  return <div>Count:{countValue}</div>;
};

export default ExtraCom;
