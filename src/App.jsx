import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./assets/components/LayoutComponent/Footer";
import Navbar from "./assets/components/LayoutComponent/Navbar";
import Sidebar from "./assets/components/LayoutComponent/Sidebar";

import HomePage from "./pages/Home";
import KanbanPage from "./pages/KanbanPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/board"
          element={
            <DndProvider backend={HTML5Backend}>
              <KanbanPage />
            </DndProvider>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
