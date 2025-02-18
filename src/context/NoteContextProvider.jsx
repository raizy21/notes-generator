import { useState } from "react";
import { NoteContext } from "./context";
const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  return (
    <NoteContext.Provider value={{ setNotes, notes }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
