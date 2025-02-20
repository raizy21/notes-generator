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
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Error parsing notes from localStorage:", error);
      return [];
    }
  });
  const [selectedNote, setSelectedNote] = useState(null); //selected note
  const [isModalOpen, setIsModalOpen] = useState(false); //modal open

  // sync notes with localStorage whenever they change
  useEffect(() => {
    //set notes local storage
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // add a new note to list
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Open modal for editing
  const updateNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setSelectedNote(noteToEdit);
    setIsModalOpen(true);
  };

  // Save the updated note
  const saveUpdatedNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? { ...note, ...updatedNote } : note
      )
    );
    setIsModalOpen(false);
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
