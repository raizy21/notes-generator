import { useState } from "react";
import { useNotes } from "../context/context";

const AddNote = () => {
  const { setNotes } = useNotes();
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNote) return;

    setNotes((prevNotes) => {
      const newState = [{ id: Date.now(), text: newNote }, ...prevNotes];
      localStorage.setItem("notes", JSON.stringify(newState));
      return newState;
    });
    setNewNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add a new note"
        className="flex-1 border-tertiary border-4 rounded px-2 py-1 mr-2 bg-secondary text-tertiary"
      />
      <button
        type="submit"
        className="bg-primary  px-4 py-2 rounded text-tertiary"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
