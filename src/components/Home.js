import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';


export default function Home() {
  const notes_available = useContext(noteContext);
  const {notes,setNotes}=notes_available;
  return (
    <div className="container my-3">
        <h1>Your Notes</h1>
        <h3>
          {notes.map((note)=>{
              return note.title;
          })}
        </h3>
    </div>
  )
}
