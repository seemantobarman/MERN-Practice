import React from "react";

function Note(props) {
  let content = props.content.substring(0,50)
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{content+"..."}</p>
    </div>
  );
}

export default Note;
