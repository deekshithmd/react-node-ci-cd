import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/");
    setMessage(res.data);
  };
  return (
    <>
      <h1>Hello FrontEnd</h1>
      <h3>Message is {message}</h3>
    </>
  );
}

export default App;
