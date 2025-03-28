import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./assets/components/LayoutComponent/Footer";
import Navbar from "./assets/components/LayoutComponent/Navbar";
import Sidebar from "./assets/components/LayoutComponent/Sidebar";

import HomePage from "./pages/Home";
import KanbanPage from "./pages/KanbanPage";
import AboutPage from "./pages/AboutPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import KanbanProvider from "./assets/components/KanbanProvider";

function App() {
  return (
    <KanbanProvider>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/board" element={<KanbanPage />}>
          <Route path=":taskId" element={<TaskDetailsPage />} />
        </Route>
      </Routes>

      <Footer />
    </KanbanProvider>
  );
}

export default App;
