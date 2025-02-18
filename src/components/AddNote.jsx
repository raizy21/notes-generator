import { useState } from "react"; //useState
import { useNotes } from "../context/context"; //context for notes

const AddNote = () => {
  const { addNote } = useNotes(); //addNote from context
  const [newNote, setNewNote] = useState(""); // state for new notes

  //submit handler form
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default
    if (!newNote.trim()) return; // prevent adding empty notes

    addNote({ id: Date.now(), text: newNote }); // add a notes
    setNewNote(""); // clear input after adding
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
