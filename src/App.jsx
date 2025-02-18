import { BrowserRouter as Router, Routes, Route } from "react-router"; //import BrowserRouter, Routes, Route from react-router
import MainLayout from "./layouts/MainLayout"; //import MainLayout
import Home from "./pages/Home"; //import Home
import NotFound from "./pages/NotFound"; // Import NotFound
import EditNotes from "./pages/EditNotes"; // Import EditNotes

// import NoteContextProvider from "./context/NoteContextProvider"; //context provider

// import AddNote from "./components/AddNote"; //add note
// import NoteList from "./components/NoteList"; // note list
// import { Toaster } from "react-hot-toast"; //tost for feedback

function App() {
  return (
    <Router>
      {" "}
      {/* Wrapping everything with Router */}
      <Routes>
        {/* MainLayout Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} />
          {/* EditNotes Route */}
          <Route path="editnotes" element={<EditNotes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* NotFound Route */}
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <NoteContextProvider>
       <Toaster position="top-right" />
       <AddNote />
       <NoteList />
     </NoteContextProvider> */
}
