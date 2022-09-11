import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  let navigate = useNavigate();

  const notes_available = useContext(noteContext);
  const { notes, getNotes } = notes_available;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      getNotes();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega
  let note_number = 0;
  return (
    <>
      <Addnote showAlert={props.showAlert} />
      <div className="container my-5">
        <h1 className='mt-5'>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            note_number += 1;
            return <Notes showAlert={props.showAlert} key={note_number} note_number={note_number} />
          })}
        </div>
      </div>
    </>
  )
}
