import { Link } from "react-router-dom";
import logo from "../../images/logo-img.png";
import userIcon from "../../images/user.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          <img className="logo-img" src={logo} alt="Logo image" />
          Kanban Board
        </Link>

        <Link className="user" href="#">
          <img src={userIcon} alt="User Icon" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
