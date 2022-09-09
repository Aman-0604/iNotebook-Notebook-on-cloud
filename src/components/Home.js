import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Notes from './Notes';


export default function Home() {
  const notes_available = useContext(noteContext);
  const { notes, setNotes } = notes_available;
  let note_number = 0;
  return (
    <div className="container my-3">
      <h1 className='my-3'>Add a Note</h1>
      <form style={{width : "90%"}}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn" style={{backgroundColor: "#7532F9", color : "white"}}>Submit</button>
      </form>
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
