import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import Notes from './Notes';


export default function Home() {
  const notes_available = useContext(noteContext);
  const { notes, setNotes } = notes_available;
  let note_number = 0;
  return (
    <div className="container my-5">
      <Addnote/>
      <h1 className='mt-5'>Your Notes</h1>
      <div className="row">
        {notes.map((note) => {
          note_number += 1;
          return <Notes key={note_number} note_number={note_number} />
        })}
      </div>
    </div>
  )
}
