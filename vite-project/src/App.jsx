import React, { useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/CreateArea.jsx";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          title={todoItem.title}
          content={todoItem.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
