import "./Projects.scss";
import { Project } from "../../component";
import { project } from "../../images";
export default function Projects({ projects }) {
  return (
    <section id="case" className="projects">
      <img className="sec-img" src={project} alt="" />
      <h2>Mina projekt</h2>

      <div className="project__project">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}
