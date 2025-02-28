import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("Login Successful");
        // Navigate to home page here
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
