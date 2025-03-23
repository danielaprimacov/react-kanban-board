import gitHubIcon from "../../images/github.png";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <img src={gitHubIcon} alt="GitHub Icon" />
      <a
        href="https://github.com/danielaprimacov/react-kanban-board"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}

export default Footer;
