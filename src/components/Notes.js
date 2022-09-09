import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export default function Notes(props) {
    const notes_available = useContext(noteContext);
    const {notes,deleteNote,updateNote}=notes_available;

    return (
        <>
        <div className="col-md-2 my-3">
            <p>
                <button className="btn" style={{backgroundColor: "#7532F9", color : "white"}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample-${props.note_number-1}`} aria-expanded="false" aria-controls={`collapseExample-${props.note_number-1}`}>
                    {notes[props.note_number-1].title}
                </button>
            </p>
            <div className="collapse" id={`collapseExample-${props.note_number-1}`}>
                <div className="card card-body">
                    {notes[props.note_number-1].description}
                    <div className="d-flex flex-row">
                        <i className="bi bi-trash3 mx-1 my-1" onClick={()=>{deleteNote(notes[props.note_number-1]._id)}} style={{cursor : 'pointer'}}></i>
                        <i className="bi bi-pencil-square mx-1 my-1" style={{cursor : 'pointer'}}></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
