import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import Notes from './Notes';


export default function Home() {
  const notes_available = useContext(noteContext);
  const { notes, setNotes } = notes_available;
  let note_number = 0;
  return (
    <div className="container my-3">
      <Addnote/>
      <h1 className='my-3'>Your Notes</h1>
      <div className="row my-3">
        {notes.map((note) => {
          note_number += 1;
          return <Notes key={note_number} note_number={note_number} />
        })}
      </div>
    </div>
  )
}
