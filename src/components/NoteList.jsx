import { useNotes } from "../context/context"; //context for notes
import NoteItem from "./NoteItem"; // item note

const NoteList = () => {
  const { notes } = useNotes(); // set context

  // console.log("notes:", notes);

  // if empty
  if (!Array.isArray(notes)) {
    return <p>Error: Notes are empty.</p>;
  }

  //if empty
  if (notes.length === 0) {
    return <p className="text-center text-primary">Add notes!</p>;
  }

  return (
    <ul>
      {notes
        .slice()
        .reverse()
        .map(
          (
            note // reverse notes before rendering
          ) => (
            <NoteItem key={note.id} note={note} />
          )
        )}
    </ul>
  );
};

export default NoteList;
