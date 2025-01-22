import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    e.preventDefault();
    if (userName == "" || email == "" || password == "") {
      alert("All fields are required");
      return;
    }
  }
  return (
    <>
      <div
        style={{
          width: "500px",
          border: "1px solid black",
          margin: "auto",
          height: "600px",
        }}
      >
        <form onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="">User Name</label>
            <input
              style={{ height: "25px" }}
              type="text"
              placeholder="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              
            />
            <p></p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              style={{ height: "25px" }}
              type="Email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
               <p></p>
          </div>
          <label htmlFor="">Password</label>
          <input
            style={{ height: "25px" }}
            type="Password"
            placeholder="Enter your Passwprd"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
             <p></p>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormPage;
