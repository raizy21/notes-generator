import NoteContextProvider from "./context/NoteContextProvider";

import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
  return (
    <NoteContextProvider>
      <AddNote />
      <NoteList />
    </NoteContextProvider>
  );
}

export default App;
