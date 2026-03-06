function Portfolio({ data }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${data.title} project`}
          className="project-image-link"
        >
          <img src={data.img.src} alt={data.img.alt} className="project-image" />
        </a>
      </div>

      <div className="project-content">
        <p className="project-tag">Featured Project</p>
        <h3 className="project-heading">{data.title}</h3>
        <p className="project-description">{data.description}</p>
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="project-link">
          Go To Project
        </a>
      </div>
    </article>
  );
}

export default Portfolio;
