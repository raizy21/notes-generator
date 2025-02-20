import { useState, useEffect } from "react"; //use state and useEffects
import { NoteContext } from "./context"; // used context
import NoteModal from "../components/NoteModal"; //import modal note
const NoteContextProvider = ({ children }) => {
  // state for notes
  const [notes, setNotes] = useState(() => {
    try {
      //saved to local storage
      const savedNotes = localStorage.getItem("notes");
      //accept a empty array if there is no notes
      return savedNotes ? JSON.parse(savedNotes) : [];  // load from storage or default to []
    } catch (error) {
      console.error("error parsing notes from localStorage:", error);
      return [];
    }
  });
  const [selectedNote, setSelectedNote] = useState(null); //selected note
  const [isModalOpen, setIsModalOpen] = useState(false); //modal open

  // sync notes with localStorage whenever they change
  useEffect(() => {
    console.log("context notes:", notes);
    //set notes local storage
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // add a new note to list
  const addNote = (note) => {
    const newNote = { ...note, id: note.id || Date.now() }; // ensure every note has an if
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // save to local storage
      return updatedNotes;
    });
  };
  // open modal for editing
  const updateNote = (id) => {
    console.log("id:", id);
    const noteToEdit = notes.find((note) => note.id === id);
    console.log("note:", noteToEdit);

    //passed id
    if (!noteToEdit) {
      console.error("note not found!", id);
      return;
    }
    setSelectedNote(noteToEdit);
    setIsModalOpen(true);
  };

  // save the updated note
  const saveUpdatedNote = (updatedNote) => {
    console.log("updated note data:", updatedNote);

    if (!updatedNote.id) {
      console.error("updated note is missing an ID:", updatedNote);
      return;
    }

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? { ...note, ...updatedNote } : note
      )
    );
    console.log("notes:", notes);
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  //remove note
  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, removeNote, updateNote }}
    >
      {children}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        note={selectedNote}
        onSave={saveUpdatedNote}
      />
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
