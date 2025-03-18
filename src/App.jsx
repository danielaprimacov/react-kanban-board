import "./App.css";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import MainContent from "./assets/components/MainContent";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
