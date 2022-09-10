import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8000";
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYzI1MGIxMWNmMzRkOTRlNjc2NzhmIn0sImlhdCI6MTY2Mjc4ODg3NX0.X4fpNG9Akqd3V7hu_3LICKoitJ_LhTs5LrX7462-v5A"
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYzI1MGIxMWNmMzRkOTRlNjc2NzhmIn0sImlhdCI6MTY2Mjc4ODg3NX0.X4fpNG9Akqd3V7hu_3LICKoitJ_LhTs5LrX7462-v5A",
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);

    let note = {
      "_id": "631c25a311cf34d94e676795",
      "user": "631c250b11cf34d94e67678f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-09-10T05:50:27.143Z",
      "__v": 0
    };
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYzI1MGIxMWNmMzRkOTRlNjc2NzhmIn0sImlhdCI6MTY2Mjc4ODg3NX0.X4fpNG9Akqd3V7hu_3LICKoitJ_LhTs5LrX7462-v5A"
      }
    });
    const json = await response.json();
    console.log(json);

    console.log("pakka deleted " + id);
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYzI1MGIxMWNmMzRkOTRlNjc2NzhmIn0sImlhdCI6MTY2Mjc4ODg3NX0.X4fpNG9Akqd3V7hu_3LICKoitJ_LhTs5LrX7462-v5A"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    // Logic to update
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;