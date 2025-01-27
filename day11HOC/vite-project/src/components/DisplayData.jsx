import React from "react";
// {
//   data:["item1", "item2", "item3", "item4", "item5", "item6"]
// }
const DisplayData = ({ data }) => {
  return (
    <div>
      {data.map((element,index) => {
        return <h1 key={index}>{element}</h1>;
      })}
    </div>
  );
};

export default DisplayData;
