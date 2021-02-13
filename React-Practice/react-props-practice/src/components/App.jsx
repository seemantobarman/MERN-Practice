import React from "react";
import Card from "./Card"
import contacts from "../contacts"

function cardDetails(object){
  return(
    <Card key={object.id} name={object.name} img={object.imgURL} tel={object.phone} email={object.email}/>
  )  
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(cardDetails)}
    </div>
  );
}

export default App;
