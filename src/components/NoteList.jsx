import { useNotes } from "../context/context";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNotes();
  const listNotes = notes.filter((note) => {
    // Use the note variable or add a condition to filter notes
    return note; // Example: return note.title.includes('keyword');
  });

  return (
    <ul>
      {listNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
