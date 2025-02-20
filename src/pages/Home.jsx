import { useState, useEffect } from "react"; //import useState and useEffect
import { getNotes, initializeNotes } from "../modules/storage"; // import storage functions

const Home = () => {
  // Use state for an array of notes

  const [noteList, setNoteList] = useState([]);

  // load notes on mount
  useEffect(() => {
    const notes = getNotes(); // get notes from storage
    if (notes.length > 0) {
      setNoteList(notes[0]); // set the first note
    }
  }, []);

  //set value from local storage
  useEffect(() => {
    initializeNotes(); // ensure localStorage is initialized
    const storedNotes = getNotes(); // get stored notes
    //reverse the array

    // console.log("loaded Notes from Storage:", storedNotes);
    setNoteList(storedNotes.reverse()); // store reverse the array
  }, []);

  return (
    <div>
      <h1 className="flex w-full text-primary text-5xl justify-center">
        Notes List
      </h1>
      <ul className="grid w-full grid-cols-2 ">
        {noteList.length > 0 ? (
          noteList.map(({ _id, date, title, img, content }, index) => (
            <li
              key={_id}
              className={` ml-12 mt-12 rounded-2xl w-[90%]
                  ${index % 2 === 0 ? "bg-primary" : "bg-accent"}`}
            >
              <h2
                className={`text-5xl flex justify-center mt-4
                ${index % 2 === 0 ? "text-accent" : "text-primary"}`}
              >
                {title}
              </h2>
              <p
                className={`text-2xl flex justify-end mr-5
                ${index % 2 === 0 ? "text-accent" : "text-primary"}`}
              >
                Date: {date}
              </p>

              <div className="flex justify-center">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[22rem] object-cover"
                />
              </div>
              <p
                className={`text-2xl flex justify-end ml-8 mb-12 mt-8
                ${index % 2 === 0 ? "text-accent" : "text-primary"}`}
              >
                {content}
              </p>
            </li>
          ))
        ) : (
          <p>No notes available</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
