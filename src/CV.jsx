import projects from "./projects";

function CV() {
  const profile = {
    name: "Osama Khatab",
    role: "Front-End Developer",
    email: "eng.osama.khatab@gmail.com",
    github: "https://github.com/osama-ktab",
  };

  const skills = ["React", "JavaScript", "HTML", "CSS", "Responsive UI"];

  return (
    <section className="cv-section" id="cv">
      <h2 className="cv-title">Curriculum Vitae</h2>
      <p className="cv-subtitle">Professional profile and direct CV download</p>

      <div className="cv-card">
        <h3 className="cv-name">{profile.name}</h3>
        <p className="cv-role">{profile.role}</p>
        <p className="cv-contact">
          Email:{" "}
          <a href={`mailto:${profile.email}`} className="cv-inline-link">
            {profile.email}
          </a>
        </p>
        <p className="cv-contact">
          GitHub:{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
            osama-ktab
          </a>
        </p>

        <div className="cv-group">
          <h4>Core Skills</h4>
          <div className="cv-skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="cv-group">
          <h4>Live Projects</h4>
          <ul className="cv-project-links">
            {projects.map((project) => (
              <li key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="cv-inline-link">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a href="/assets/Osama-Khatab-CV.pdf" download className="cv-download-btn">
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}

export default CV;
