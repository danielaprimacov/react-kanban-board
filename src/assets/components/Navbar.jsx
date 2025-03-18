import logo from "../images/logo-img.jpeg";
import userIcon from "../images/user.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo" href="#">
          <img className="logo-img" src={logo} alt="Logo image" />
          Kanban Board
        </a>

        <a className="user" href="#">
          <img src={userIcon} alt="User Icon" />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
