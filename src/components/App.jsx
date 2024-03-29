import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";


function App() {
  const[notes, setNote] = useState([]);


  function addNote(newNote){
    setNote(prevNotes => {
     return [...prevNotes, newNote];
    });
  } 

  function deleteNote(id){
    setNote(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !==id; 
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
    {  notes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        /> 
      })}
      <Note key={1} title="Note Title" content="Note Content" />
      <Footer />
    </div>
  );
}


export default App;