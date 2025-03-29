import "./App.css";

function App() {
  return (
    <KanbanProvider>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </KanbanProvider>
  );
}

export default App;
