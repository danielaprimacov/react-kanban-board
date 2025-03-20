import "./App.css";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import MainContent from "./assets/components/MainContent";
import Tasks from "./assets/components/Taks";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <MainContent />
       */}
      <Tasks />
      <Footer />
    </>
  );
}

export default App;
