import Data from "../Data/Data";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-3">Popular Projects</h2>
        <p className="text-center text-muted mb-5">
          Create, Innovate, and Elevate.
        </p>

        <div className="row">
          {Data[0].projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                </div>

                <div className="project-body text-center">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <span className="badge bg-primary">
                    {project.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;