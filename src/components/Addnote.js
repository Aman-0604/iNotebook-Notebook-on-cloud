import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';


export default function Addnote() {
    const notes_available = useContext(noteContext);
    const {notes,addNote,deleteNote,updateNote}=notes_available;
    
    const [note, setNote] = useState({title:"", description:"",tag:""})

    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value});// notes ko hi update kar dega(... ka matlab) 
    }
    const clickHandler=(e)=>{
        e.preventDefault();//so that page does not gets loaded
        addNote(note.title,note.description,note.tag);
    }
    return (
        <>
            <h1 className='my-3'>Add a Note</h1>
            <form style={{ width: "90%" }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="text" onChange={onChange} className="form-control" id="title" name='title' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                    <input type="text" onChange={onChange} className="form-control" id="description" name='description' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><strong>Tag</strong></label>
                    <input type="text" onChange={onChange} className="form-control" id="tag" name='tag' />
                </div>
                <button type="submit" className="btn" onClick={clickHandler} style={{ backgroundColor: "#7532F9", color: "white" }}><i className="bi bi-plus"/></button>
            </form>
        </>

    )
}
