import { BrowserRouter as Router, Routes, Route } from "react-router"; //import BrowserRouter, Routes, Route from react-router
import MainLayout from "./layouts/MainLayout"; //import MainLayout
import Home from "./pages/Home"; //import Home
import NotFound from "./pages/NotFound"; // Import NotFound
import EditNotes from "./pages/EditNotes"; // Import EditNotes

function App() {
  return (
    <Router>
      {" "}
      {/* Wrapping everything with Router */}
      <Routes>
        {/* MainLayout Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} />
          {/* EditNotes Route */}
          <Route path="edit" element={<EditNotes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* NotFound Route */}
      </Routes>
    </Router>
  );
}

export default App;
