import Pen from "./Pen";
import Trash from "./Trash";


const NoteItem = ({ note }) => {
  return (
    <li className="flex items-center mb-2">
      <p className="text-primary ml-2 mt-2">{note.text}</p>
      <Pen />
      <Trash />
    </li>
  );
};

export default NoteItem;
