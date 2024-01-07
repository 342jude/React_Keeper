import React, { useState } from "react";
import App from "../App";

function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((newName) => {
      return {
        ...newName,
        [name]: value,
      };
    });
  }

  function handleAddText(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleAddText}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name={"content"}
          placeholder={"Take a note..."}
          rows="3"
          value={inputText.content}
        />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
