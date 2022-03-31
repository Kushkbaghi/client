import React from "react";
import "./Jobs.scss";
import { Job } from "../../component";
import { job } from "../../images";

export default function Jobs({ jobs }) {
  return (
    <section id="arbetserfarenhet" className="jobs">
      <img className="sec-img" src={job} alt="" />
      <h2>Mina arbetserfarenhet</h2>

      <div className="job__job">
        <table >
          <tr className="job__table">
            <th>Title</th>
            <th>Arbetsort</th>
            <th>Start datum</th>
            <th>Slut datum</th>
          </tr>
          {jobs.map((job) => (
            <Job job={job} />
          ))}
        </table>
      </div>
    </section>
  );
}
