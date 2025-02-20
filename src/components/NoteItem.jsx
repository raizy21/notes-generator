import Pen from "./Pen"; //svg pen for update
import Trash from "./Trash"; //svg trash for deleting
import { toast } from "react-hot-toast"; //toast for notification
import { useNotes } from "../context/context"; //  context notes

const NoteItem = ({ note }) => {

  console.log("note :", note);
  const { updateNote } = useNotes(); // edit functionality
  const { removeNote } = useNotes(); // delete functionality

  return (
    <div className="flex">
      <li className="flex items-center mb-2">
        <div className="flex flex-col ml-2 mr-12 border-4 border-primary mt-5">
          <div className="flex flex-row ">
            <p className="text-primary ml-2 mt-2 text-4xl">{note.title}</p>
            <p className="text-primary  mt-5 ml-12">{note.img}</p>
          </div>
          <p className="text-primary ml-2 mt-2 text-2xl">{note.content}</p>
        </div>
        <Pen
          note={note}
          onClick={() => {
            console.log("note:", note.id);

            updateNote(note.id);
            toast.success("note updated!");
          }}
        />
        <Trash
          onClick={() => {
            removeNote(note.id);
            toast.error("note deleted!");
          }}
          aria-label="delete Note"
        />
      </li>
    </div>
  );
};

export default NoteItem;
