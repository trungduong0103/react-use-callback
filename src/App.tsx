import React, { useEffect } from "react";
import "./styles.css";

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve([1, 2, 3]);
    }, 3000);
  });
};

export default function App() {
  const [myArray, setMyArray] = React.useState([]);
  console.log("render", myArray);

  useEffect(() => {
    // api().then((data) => setMyArray(data));
  });

  return <div className="App"></div>;
}
