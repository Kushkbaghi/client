import React from "react";

import "./Job.scss";

export default function Job({ job }) {
  return (
    <tr>
      <td>{job.title}</td>
      <td>{job.title}</td>
      <td>{job.start.split('T')[0]}</td>
      <td>{job.end.split('T')[0]}</td>
    </tr>
  );
}
