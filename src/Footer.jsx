import GitHubIcon from "./GitHubIcon";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <p className="footer-text">(c) {year} Osama Khatab. Built with React.</p>
      <div className="footer-links">
        <a href="mailto:eng.osama.khatab@gmail.com">Email</a>
        <a
          href="https://github.com/osama-ktab"
          target="_blank"
          rel="noopener noreferrer"
          className="github-inline-link">
          <GitHubIcon />
          GitHub
        </a>
        <a href="/assets/Osama-Khatab-CV.pdf" download>
          Download CV
        </a>
      </div>
    </footer>
  );
}

export default Footer;
