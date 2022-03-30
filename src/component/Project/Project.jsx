import { AiOutlineCode } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import "./Project.scss";

export default function Project({ project }) {
  const imgUrl = "https://localhost:7074/Images/thumb_";
  return (
    <article key={project.id} className="project">
      <div className="project__img">
        <img src={imgUrl + project.imageName} alt="projeks bild" />
      </div>

      <h3>{project.name}</h3>

      <p className="desc">{project.description.replace(/(<([^>]+)>)/gi, "")}</p>
      <a className="card__link" href={project.url}>
        Till projektet
        <FiExternalLink />
      </a>
    </article>
  );
}
