import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const noteItem=[
        {
          "_id": "6318992e37d6879d6180a990",
          "user": "6314412d94df952068ba2db4",
          "title": "React Course",
          "description": "Sab se khatarnak course",
          "tag": "personal",
          "date": "2022-09-07T13:14:22.376Z",
          "__v": 0
        },
        {
          "_id": "6318994237d6879d6180a992",
          "user": "6314412d94df952068ba2db4",
          "title": "Heavy Coder",
          "description": "Sab se khatarnak coder",
          "tag": "personal",
          "date": "2022-09-07T13:14:42.941Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(noteItem);
    
    return(
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;