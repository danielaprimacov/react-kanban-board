import logo from "../images/logo-img.jpeg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo" href="#">
          <img className="logo-img" src={logo} alt="Logo image" />
          Kanban Board
        </a>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
        <div className="sidebar"></div>
      </nav>
    </>
  );
}

export default Navbar;
