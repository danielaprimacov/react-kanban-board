import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./assets/components/LayoutComponent/Footer";
import Navbar from "./assets/components/LayoutComponent/Navbar";
import Sidebar from "./assets/components/LayoutComponent/Sidebar";
import Home from "./assets/components/Home";
import KanbanBoard from "./assets/components/KanbanBoard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/board"
          element={
            <DndProvider backend={HTML5Backend}>
              <KanbanBoard />
            </DndProvider>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
