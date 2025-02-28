import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in user credential
        console.log(res);
        alert("Sign Up Successfully");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here
        // alert("signup fail");
        alert(error)
        console.error("Error creating user:", error);
      });
  }
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
