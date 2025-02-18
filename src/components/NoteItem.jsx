import Pen from "./Pen"; //svg pen for update
import Trash from "./Trash"; //svg trash for deleting
import { toast } from "react-hot-toast"; //toast for notification
import { useNotes } from "../context/context"; //  context notes

const NoteItem = ({ note }) => {
  const { updateNote } = useNotes(); // edit functionality
  const { removeNote } = useNotes(); // delete functionality

  return (
    <li className="flex items-center mb-2">
      <p className="text-primary ml-2 mt-2">{note.text}</p>
      <Pen
        note={note}
        onClick={() => {
          updateNote(note.id);
          toast.success("Note updated!");
        }}
      />
      <Trash
        onClick={() => {
          removeNote(note.id);
          toast.error("Note deleted!");
        }}
        aria-label="Delete Note"
      />
    </li>
  );
};

export default NoteItem;
