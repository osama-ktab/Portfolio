import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Portfolio from "./Portfolio";
import CV from "./CV";
import Footer from "./Footer";
import projects from "./projects";

function App() {
  const allProjects = projects.map((project) => {
    return <Portfolio key={project.id} data={project} />;
  });

  return (
    <>
      <Header />
      <Home />

      <section className="portfolio-section" id="projects">
        <h2 className="portfolio-title">Portfolio</h2>
        <p className="portfolio-subtitle">Selected projects with React</p>
        <div className="projects-grid">{allProjects}</div>
      </section>

      <CV />
      <Footer />
    </>
  );
}

export default App;
