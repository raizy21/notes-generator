import { createContext, useContext } from "react"; //createContext and useContext imports

const NoteContext = createContext(null); //a default value to avoid potential undefined errors

//context for notes
const useNotes = () => {
  //set context
  const context = useContext(NoteContext);

  // context error
  if (!context)
    throw new Error("useNotes must be used inside of a NoteContextProvider");
  // console.log('context: ', context);

  return context;
};

export { NoteContext, useNotes };
