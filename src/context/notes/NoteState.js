import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://i-notebook-aman.herokuapp.com";
  let noteItem = [];
  const [notes, setNotes] = useState(noteItem);

  //                                                                   Get all notes
  const getNotes = async () => {
    // API Calls
    let url = `${host}/api/notes/fetchAllNotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  //                                                                    Add a note
  const addNote = async (title, description, tag) => {
    // API Calls
    let url = `${host}/api/notes/addNotes`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({title,description,tag}),//will convert the object into type JSON
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });
    const note = await response.json();
    setNotes(notes.concat(note)); //concat returns an array whereas push updates an array
  }


  //                                                                   Delete a note
  const deleteNote = async (id) => {
    // API Calls
    let url = `${host}/api/notes/deleteNotes/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((notes) => { return notes._id !== id });
    setNotes(newNotes);
  }

  //                                                                   Update a note
  const updateNote = async (id, title, description, tag) => {
    // API Calls
    let url = `${host}/api/notes/updateNotes/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    let newNotes=JSON.parse(JSON.stringify(notes));
    // Logic to update
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;