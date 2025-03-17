import gitHubIcon from "../images/github.png";

function Footer() {
  return (
    <div className="footer">
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
