import React,{useContext,useEffect} from 'react';
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import Notes from './Notes';


export default function Home() {
  const notes_available = useContext(noteContext);
  const { notes,getNotes} = notes_available;
  useEffect(() => {
    getNotes();
  }, [])//[]means sirf ek baar yeh function chalega
  let note_number = 0;
  return (
    <>
      <Addnote />
      <div className="container my-5">
        <h1 className='mt-5'>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            note_number += 1;
            return <Notes key={note_number} note_number={note_number} />
          })}
        </div>
      </div>
    </>
  )
}
