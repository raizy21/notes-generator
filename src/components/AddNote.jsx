import { useState } from "react"; //useState
import { useNotes } from "../context/context"; //context for notes

// export const oneNote = [
//   {
//     _id: 1,
//     date: "2025-23-23",
//     title: "Fix all issues",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWOkwztu3cUUtP2FK5z2cnUyo2LhEGS0ZPg&s",
//     content:
//       "Fixing all issues requires a structured approach. First, identify the problem and understand its root cause. Prioritize the most urgent and impactful issues. Develop a clear plan to resolve them, then implement and test the solution. Monitor the results to ensure effectiveness and make adjustments if needed. Finally, document the resolution to prevent future occurrences. With a methodical approach, any issue can be successfully resolved.",
//   },
// ];

const AddNote = () => {
  const { addNote } = useNotes(); //addNote from context
  const [titleTextNote, setTitleTextNote] = useState(""); //state for titleTextNote
  const [imgTextNote, setImgTextNote] = useState(""); //state for imgTextNote
  const [newTextNote, setTextNewNote] = useState(""); // state for newTextNote

  //submit handler form
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default submission
    if (!newTextNote.trim()) return; // prevent adding empty notes

    addNote({
      _id: Date.now(),
      date: new Date().toISOString(),
      title: titleTextNote,
      img: imgTextNote,
      content: newTextNote,
    }); // add a notes
    setTitleTextNote(""); // clear title input after submission
    setImgTextNote(""); // clear img input after submission
    setTextNewNote(""); // clear text input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col space-y-2">
      <input
        type="text"
        name="title"
        value={titleTextNote}
        onChange={(e) => setTitleTextNote(e.target.value)}
        placeholder="Note Title"
        className="border-tertiary border-2 rounded px-2 py-1 bg-secondary text-tertiary"
      />

      <input
        type="text"
        name="img"
        value={imgTextNote}
        onChange={(e) => setImgTextNote(e.target.value)}
        placeholder="Image URL"
        className="border-tertiary border-2 rounded px-2 py-1 bg-secondary text-tertiary"
      />
      <textarea
        type="text"
        name="note"
        value={newTextNote}
        onChange={(e) => setTextNewNote(e.target.value)}
        placeholder="Add a new note"
        className="flex w-full border-tertiary border-4 rounded px-2 py-1 mr-2 bg-secondary text-tertiary"
        rows="3"
      />
      <button
        type="submit"
        className="btn  px-4 py-2 rounded text-primary bg-accent"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
