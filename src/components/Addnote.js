import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


export default function Addnote(props) {
    const notes_available = useContext(noteContext);
    const {addNote} = notes_available;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });// notes ko hi update kar dega(... ka matlab) 
    }

    const clickHandler = (e) => {
        e.preventDefault();//so that page does not gets loaded
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("success","Your note has been added.");
    }
    return (

            <div className="container my-5">
                <h1 className='my-3'>Add a Note</h1>
                <form style={{ width: "90%" }}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label"><h5>Title</h5></label>
                        <input type="text" onChange={onChange} className="form-control" id="title" name='title' value={note.title} minLength={3}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label"><h5>Description</h5></label>
                        <input type="text" onChange={onChange} className="form-control" id="description" value={note.description} name='description' minLength={3} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label"><h5>Tag</h5></label>
                        <input type="text" onChange={onChange} className="form-control" id="tag" value={note.tag} name='tag' />
                    </div>
                    <button type="submit" className="btn" onClick={clickHandler} style={{ backgroundColor: "#7532F9", color: "white" }}><i className="bi bi-plus" /></button>
                </form>
            </div>


    )
}
