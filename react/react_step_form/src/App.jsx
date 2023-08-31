import React, { Component } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import { useState, useEffect } from "react";

function App() {
  // const [arr, setArr] = useState([]);

  // useEffect (() => {
  //   async function fetchr(){
  //     var requestOptions = {
  //       method: 'GET',
  //       // headers: myHeaders,
  //       // redirect: 'follow'
  //     };

  //     fetch("https://cat-fact.herokuapp.com/facts/", requestOptions)
  //       .then(response => setArr(response.text()))
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));
  //   }
  //   fetchr();
  // }, [])

  return (
    <div className="App">
      <UserForm />
      {/* <div className="mBox">
        <div className="c1"></div>
        <div className="centerC">
          <div className="c2"></div>
          <div className="c3"></div>
        </div>
        <div className="c4"></div>
      </div>
      <h1>
        {arr.map((text) => {
          return;
          <p>{text}</p>;
        })}
      </h1> */}
    </div>
  );
}

export default App;
