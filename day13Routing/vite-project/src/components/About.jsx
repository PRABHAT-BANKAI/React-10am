import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // Navigate to home page after 5 seconds
    }, 5000);
  });
  return <div>About</div>;
};

export default About;
