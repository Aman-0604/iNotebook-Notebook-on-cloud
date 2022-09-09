import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    // Every component and the componenets inside them too will get access to the NoteState context.
    <NoteState>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
