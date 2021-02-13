import React,{useState,useEffect} from "react";

function App() {

  const [isMousedOver, setMousedOver] = useState(false)
  const [title, setTitle] = useState("Hello")

  useEffect(function() {
    console.log("Hi from the useEffect, isMousedOver Changed!")
  },[isMousedOver])

  useEffect(function() {
    console.log("title changed!")
  },[title])
  
  function handelMouseOver(){
    setMousedOver(true)
  }

  function handelMouseOut(){
    setMousedOver(false)
  }

  function handelMouseClick(){
    setTitle("Submitted")
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handelMouseClick} style={{backgroundColor: isMousedOver? "black":"white"}} onMouseOver={handelMouseOver} onMouseOut={handelMouseOut}>Submit</button>
    </div>
  );
}

export default App;
