import KanbanProvider from "./KanbanProvider";
import Navbar from "./LayoutComponent/Navbar";
import Sidebar from "./LayoutComponent/Sidebar";
import Footer from "./LayoutComponent/Footer";

function RootLayout({ children }) {
  return (
    <KanbanProvider>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </KanbanProvider>
  );
}

export default RootLayout;
