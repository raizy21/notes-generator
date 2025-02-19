import NoteContextProvider from "../context/NoteContextProvider"; //context provider

import AddNote from "../components/AddNote"; //add note
import NoteList from "../components/NoteList"; // note list
import { Toaster } from "react-hot-toast"; //tost for feedback

const EditNotes = () => {
  return (
    <>
      <NoteContextProvider>
        <Toaster position="top-right" />
        <AddNote />
        <NoteList />
      </NoteContextProvider>
    </>
  );
};

export default EditNotes;
