import { useState, useEffect } from "react"; //import useState and useEffect
import { useNotes } from "../context/context"; //import notes

const NoteModal = ({ isOpen, onClose, note, onSave }) => {
  const { addNote } = useNotes(); //=import addNote
  const [title, setTitle] = useState(note?.title || ""); //state for title
  const [img, setImg] = useState(note?.img || ""); //state for img
  const [content, setContent] = useState(note?.content || ""); //state for content

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return; // prevent empty notes

    addNote({ title, img, content }); // add note automatically
    onClose(); // close the modal
  };

  useEffect(() => {
    console.log("modal:", note);
    if (note) {
      setTitle(note.title || ""); //set title for note
      setImg(note.img || ""); // set img for note
      setContent(note.content || ""); //set content for note
    }
  }, [note]); //rendering again after changing

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-primary p-6 rounded-lg ">
        <h2 className="text-xl mb-4 text-accent">Edit Note</h2>

        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded-full"
        />

        <input
          type="text"
          placeholder="image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full p-2 mb-2 border rounded-full"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 border rounded-"
        />

        <div className="flex justify-end">
          <button className="btn text-primary mr-3" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn text-primary"
            onClick={() => {
              console.log("note:", {
                id: note?.id,
                title,
                img,
                content,
              });
              onSave({ id: note?.id, title, img, content });
              handleSave;
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
