import "./App.css";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import MainContent from "./assets/components/MainContent";
import KanbanBoard from "./assets/components/KanbanBoard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <MainContent />
       */}
      <KanbanBoard />
      <Footer />
    </>
  );
}

export default App;
