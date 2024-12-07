import React, { useState } from "react";
import Header from "./Header.js";
import Note from "./Note.js";
import Footer from "./Footer.js"
import notes from "./notes.js"
import CreateArea from "./CreateArea.js";
function App() {
  const [notes,setNotes]=useState([])
  function addNote(newNote){
    setNotes(prevNotes=>{
      return[
        ...prevNotes,newNote
      ]
    })
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!=id
      })
    })
  }
  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index)=>{
        return <Note title={noteItem.title} content={noteItem.content} onDelete={deleteNote} key={index} id={index}/>
      })}
      <Footer/>
    </div>
  );
}
export default App;
