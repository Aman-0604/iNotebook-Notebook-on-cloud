import React, { useContext, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function Notes(props) {
    const notes_available = useContext(noteContext);
    const { notes, deleteNote, updateNote } = notes_available;

    const modal_ui = useRef(null);
    const closeModal_ui = useRef(null);

    const [note, setNote] = useState({ eid:"", etitle: "", edescription: "", etag: "" });

    const openModal = (currentNote) => {
        modal_ui.current.click();
        setNote({ eid :currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });//(... ka matlab) jo mera note tha usime update kardo saath saath
    }

    const updatingNote = (e) => {
        updateNote(note.eid, note.etitle, note.edescription, note.etag);
        closeModal_ui.current.click();
    }
    return (
        <>
            <button type="button" ref={modal_ui} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" ref={closeModal_ui} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form style={{ width: "90%" }}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                                    <input type="text" onChange={onChange} className="form-control" id="etitle" value={note.etitle} name='etitle'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                                    <input type="text" onChange={onChange} className="form-control" value={note.edescription} id="edescription" name='edescription' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"><strong>Tag</strong></label>
                                    <input type="text" onChange={onChange} className="form-control" value={note.etag} id="etag" name='etag' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={updatingNote}  style={{ backgroundColor: "#7532F9", color: "white" }} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-2 my-3">
                <p>
                    <button className="btn" style={{ backgroundColor: "#7532F9", color: "white" }} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample-${props.note_number - 1}`} aria-expanded="false" aria-controls={`collapseExample-${props.note_number - 1}`}>
                        {notes[props.note_number - 1].title}
                    </button>
                </p>
                <div className="collapse" id={`collapseExample-${props.note_number - 1}`}>
                    <div className="card card-body">
                        {notes[props.note_number - 1].description}
                        <div className="d-flex flex-row">
                            <i className="bi bi-trash3 mx-1 my-1" onClick={() => { deleteNote(notes[props.note_number - 1]._id) }} style={{ cursor: 'pointer' }}></i>
                            <i className="bi bi-pencil-square mx-1 my-1" onClick={() => { openModal(notes[props.note_number - 1]) }} style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
