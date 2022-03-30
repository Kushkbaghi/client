import { AiOutlineCode } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import "./Cards.scss";

export default function Cards() {
  return (
    <>
      <section className="cards">
        <article className="card">
          <AiOutlineCode />
          <h2>Webbutveckling</h2>
          <p>
            Som webbutvecklare har jag god förståelse för tillgänglghet samt hur
            webbapplikationer fungerar. Jag utvecklar i bland annat C#,
            Javascript, PHP, HTML, CSS, Java samt diverse ramverk för både
            front-end och back-end.
          </p>

          <a className="card__link" href="#projekt">
            Till mina projekt
            <FiExternalLink />
          </a>
        </article>
        <article className="card">
          <MdSchool />
          <h2>Utbildning</h2>
          <p>
            Här kan du läsa om kurser som jag har läst på universitet. Det
            innefattar kurse som tillhör webbutvecklingsprogrammet samt
            fristående kurser inom IT och matematik.
          </p>
          <a className="card__link" href="#projekt">
            Till mina studier
            <FiExternalLink />
          </a>
        </article>
        <article className="card">
          <MdWorkOutline />
          <h2>Arbetserfarenhet</h2>
          <p>
            Jag har jobbat som lärarassistent, lärare i digital kompetens och
            matematik på grundläggande nivå på komvux.
          </p>
          <a className="card__link" href="#projekt">
            Till mina arbetserfarenhet
            <FiExternalLink />
          </a>
        </article>
      </section>
    </>
  );
}
