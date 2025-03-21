import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";
import Footer from "./assets/components/LayoutComponent/Footer";
import Navbar from "./assets/components/LayoutComponent/Navbar";
import Sidebar from "./assets/components/LayoutComponent/Sidebar";
import MainContent from "./assets/components/MainContent";
import KanbanBoard from "./assets/components/KanbanBoard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <MainContent />
       */}
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard />
      </DndProvider>

      <Footer />
    </>
  );
}

export default App;
