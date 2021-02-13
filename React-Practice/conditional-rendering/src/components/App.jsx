import React from "react";
import LoginForm from "./LoginForm"

var isLoggedIn = true

// function renderConditionally() {
//   if(isLoggedIn){
//     return(
//       <h1>Hello</h1>
//     )
//   }else{
//     return(
//       // <form className="form">
//       //   <input type="text" placeholder="Username" />
//       //   <input type="password" placeholder="Password" />
//       //   <button type="submit">Login</button>
//       // </form>
//       <LoginForm />
//     )
//   }
// }

//Ternary Opertator
// Check condition ? Do Something If True : Do something If False

function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
      { isLoggedIn===true ? <h1>Hello</h1> : <LoginForm/> }
    </div>
  );
}

export default App;
