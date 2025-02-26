import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState();
  function handleLogout() {
    localStorage.clear();
    setUserData(null);
    window.location.reload();
  }
  useEffect(() => {
   setUserData( JSON.parse(localStorage.getItem("user")))
  },[])

  return (
    <div>
      {userData && <p>Name:{userData}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
