import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useUser } from './UserContext';


function Home() {
  const [notes, setNotes] = useState([]);
  const { userEmail } = useUser();



  async function fetchData(email) {
    let res = await fetch("http://localhost:5000/api/v1/getData", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let data = await res.json()
    setNotes(data)
  }

  async function postData(email, notes) {
    let res = await fetch("http://localhost:5000/api/v1/postData", {
      method: "POST",
      body: JSON.stringify({ email: email, data: notes }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    
  
  }

  useEffect(() => {
    fetchData(userEmail)
  }, []);



  function addNote(newNote) {
    setNotes(prevNotes => {
      let updateNote = [...prevNotes, newNote]
      postData(userEmail,updateNote)
      return updateNote;
    });

  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      let updateNote = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      postData(userEmail,updateNote)
      return updateNote
    });

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
