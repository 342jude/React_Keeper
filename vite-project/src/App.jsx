import React from "react";
import Note from "./components/Note";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import notes from "./notes.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {notes.map((jote) => (
        <Note key={jote.id} title={jote.title} content={jote.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
