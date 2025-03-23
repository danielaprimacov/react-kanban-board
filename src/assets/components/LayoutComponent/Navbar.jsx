import { Link } from "react-router-dom";
import logo from "../../images/logo-img.png";
import userIcon from "../../images/user.png";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <Link className={classes["navbar-logo"]} to="/">
          <img className={classes["logo-img"]} src={logo} alt="Logo image" />
          KanbanBoard
        </Link>

        <Link className={classes.user} href="#">
          <img src={userIcon} alt="User Icon" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
