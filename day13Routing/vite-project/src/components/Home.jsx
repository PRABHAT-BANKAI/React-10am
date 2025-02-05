import React, { useEffect } from "react";

const Home = ({ userData  }) => {
  useEffect(() => {
    setTimeout(() => {
      // setUserData(["item", "item8", "item9", "item10", "item11"]);
    }, 5000);
  });
  return (
    <div>
      Home
      {userData &&
        userData.map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
    </div>
  );
};

export default Home;
