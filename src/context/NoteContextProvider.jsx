import { useState, useEffect } from "react";
import { NoteContext } from "./context";
const NoteContextProvider = ({ children }) => {
  // state for notes
  const [notes, setNotes] = useState(() => {
    try {
      //saved to local storage
      const savedNotes = localStorage.getItem("notes");
      //accept a empty array if there is no nodes
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Error parsing notes from localStorage:", error);
      return [];
    }
  });

  // sync notes with localStorage whenever they change
  useEffect(() => {
    //set notes local storage
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // add a new note to list
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  //update the note
  const updateNote = (id) => {
    //prompt for edit
    const newText = prompt("Edit your note:");
    //if there is something
    if (newText !== null && newText.trim() !== "") {
      //add new text to the list
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, text: newText } : note
        )
      );
    }
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
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
