import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
export default function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [])
  
  return (
    <div>About {a.state.name} whose branch is {a.state.branch}</div>
  )
}
